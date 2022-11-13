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
      // const { token } = data
      // localStorage.setItem('token', token)
      //would also want to mess with the type, a 400 request could come back from the server and in which case I'd want to attach a type of bad HTTP and save that to the error state.
      console.log(data, 'data in send login request after response.json')
      // if (data.token) {
      //   localStorage.setItem('user', data.token)
      // }
      localStorage.setItem('user', 'test')
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
}

const initialState: TodoAppState = {
  loading: false,
  loggedIn: false,
  formValidated: false,
  todos: [],
  //this is what will be shown in the actual todos rendering
  searchedTodos: [],
  user: null,
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
        state.user = action.payload as User
      })
      .addCase(sendLoginRequest.rejected, (state, action) => {
        state.user = action.payload as null
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
