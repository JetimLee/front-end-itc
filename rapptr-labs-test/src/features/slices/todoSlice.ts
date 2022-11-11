import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  isBeingEdited: boolean
}

//the example async request
// export const getPokemon = createAsyncThunk(
//     "pokemon/getPokemon",
//     async (_data, thunkApi) => {
//       try {
//         const response = await fetch(
//           "https://pokeapi.co/api/v2/pokemon?limit=151"
//         );
//         const data = await response.json();
//         const allData = await Promise.all(
//           data.results.map(async (pokemonResult: PokemonResult) => {
//             const pokemonResponse = await fetch(pokemonResult.url);
//             const pokemonData = await pokemonResponse.json();
//             return pokemonData;
//           })
//         );
//         console.log("got the data", allData);
//         return allData;
//       } catch (error) {
//         console.log("An error occurred when getting the pokemon", error);
//         return thunkApi.rejectWithValue(error);
//       }
//     }
//   );

interface TodoAppState {
  loading: boolean
  loggedIn: boolean
  formValidated: boolean
  todos: Todo[]
  searchedTodos: Todo[]
}

const initialState: TodoAppState = {
  loading: false,
  loggedIn: false,
  formValidated: false,
  todos: [],
  //this is what will be shown in the actual todos rendering
  searchedTodos: [],
}

const todoSlice = createSlice({
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
  },
  //the example async reducer handler
  //   extraReducers(builder) {
  //     builder
  //       .addCase(getPokemon.pending, (state, action: PayloadAction<any>) => {
  //         state.loading = true;
  //       })
  //       .addCase(getPokemon.fulfilled, (state, action: PayloadAction<any>) => {
  //         state.data = action.payload;
  //         state.searchList = action.payload;
  //         state.loading = false;
  //       })
  //       .addCase(getPokemon.rejected, (state, action: PayloadAction<any>) => {
  //         state.error = action.payload;
  //       });
  //   },
})

export const { addTodo, filterTodos, removeToDo, resetTodosSearch } =
  todoSlice.actions
export default todoSlice.reducer
