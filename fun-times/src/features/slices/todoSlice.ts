import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { TodoItem } from '../../interfaces'

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
    const { email, password } = data
    let bodyFormData = new FormData()
    bodyFormData.append('email', email)
    bodyFormData.append('password', password)
    const loginUrl = `https://dev.rapptrlabs.com/Tests/scripts/user-login.php`
    try {
      const response = await axios({
        method: 'post',
        url: loginUrl,
        data: bodyFormData,
      })
      const { data } = response
      const { user_token } = data
      if (user_token) {
        localStorage.setItem('user', user_token)
        return data
      }
    } catch (error) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue(error.message)
      } else if (error instanceof Error) {
        return error.message
      }
    }
  }
)

interface TodoAppState {
  loading: boolean
  loggedIn: boolean
  formValidated: boolean
  todos: TodoItem[]
  user: User | null
  error: string | null
}

const initialState: TodoAppState = {
  loading: false,
  loggedIn: false,
  formValidated: false,
  todos: [],
  //this is what will be shown in the actual todos rendering
  user: null,
  error: null,
}

const todoSlice: any = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.unshift(action.payload)
      // localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    removeToDo: (state, action: PayloadAction<TodoItem[]>) => {
      state.todos = action.payload
      // localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    setActualToDoItems: (state, action: PayloadAction<TodoItem[]>) => {
      state.todos = action.payload
    },
    //this is used for rerendering the list

    updateTodoITems: (state, action: PayloadAction<TodoItem[]>) => {
      state.todos = action.payload
      // localStorage.setItem('todos', JSON.stringify(state.todos))
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
        if (action.payload.hasOwnProperty('user_token')) {
          state.user = action.payload as User
          state.error = null
        } else {
          state.error = action.payload
        }
      })
      .addCase(sendLoginRequest.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const {
  addTodo,
  removeToDo,
  setFormValidation,
  updateTodoITems,
  setActualToDoItems,
} = todoSlice.actions
export default todoSlice.reducer
