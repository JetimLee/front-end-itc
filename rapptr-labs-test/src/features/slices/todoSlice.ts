import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  isBeingEdited: boolean
}
interface formData {
  password: string
  email: string
}
interface User {
  //would want to work more on this interface
  user?: string
  token?: string
}

export const sendLoginRequest = createAsyncThunk(
  //this is where the auth logic goes
  'todos/sendLoginRequest',
  async (data: formData, thunkApi) => {
    console.log('processing login request')
    console.log(data, 'data argument in send login request async thunk')
    const settings: RequestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
    }
    const loginUrl = `http://dev.rapptrlabs.com/Tests/scripts/user-login.php`
    try {
      const response = await fetch(loginUrl, settings)
      console.log(response)
      const data: User = await response.json()
      //how it'd look if i was actually getting back a response here
      // const { user } = data
      // localStorage.setItem('user', user)
      //would also want to mess with the type, a 400 request could come back from the server and in which case I'd want to attach a type of bad HTTP and save that to the error state.
      console.log(data, 'data in send login request after response.json')
      const { token } = data
      if (token) {
        localStorage.setItem('user', token)
        //this will be the user object i get back
        return data
      }
      //for testing with the broken api
      // localStorage.setItem('user', 'test')
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error) as unknown as Error
    }
  }
)

interface TodoAppState {
  loading: boolean
  loggedIn: boolean
  formValidated: boolean
  todos: Todo[]
  searchedTodos: Todo[]
  user: User | null
  error: Error | null
}

const initialState: TodoAppState = {
  loading: false,
  loggedIn: false,
  formValidated: false,
  todos: [],
  //this is what will be shown in the actual todos rendering
  searchedTodos: [],
  user: null,
  error: null,
}

const todoSlice: any = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeToDo: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
    filterTodos: (state, action: PayloadAction<Todo[]>) => {
      state.searchedTodos = action.payload
    },
    resetTodosSearch: (state, action: PayloadAction<Todo[]>) => {
      state.searchedTodos = action.payload
    },
    setFormValidation: (state, action: PayloadAction<boolean>) => {
      state.formValidated = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(sendLoginRequest.pending, (state, action) => {
        state.loading = true
      })
      .addCase(sendLoginRequest.fulfilled, (state, action) => {
        state.loading = false
        // console.log(action.type, 'action type')
        if (action.payload.hasOwnProperty('token')) {
          state.user = action.payload as User
        } else {
          state.error = action.payload as Error
        }
      })
      .addCase(sendLoginRequest.rejected, (state, action) => {
        state.error = action.payload as Error
      })
  },
})

export const {
  addTodo,
  filterTodos,
  removeToDo,
  resetTodosSearch,
  setFormValidation,
} = todoSlice.actions
export default todoSlice.reducer
