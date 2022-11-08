import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface PokemonResult {
  name: string;
  url: string;
}
export interface ActualPokemonCardResult {
  sprites: { back_default: string; front_default: string };
  species: { name: string; url: string };
  id: number;
  name: string;
}

export const getPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (_data, thunkApi) => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      const allData = await Promise.all(
        data.results.map(async (pokemonResult: PokemonResult) => {
          const pokemonResponse = await fetch(pokemonResult.url);
          const pokemonData = await pokemonResponse.json();
          return pokemonData;
        })
      );
      console.log("got the data", allData);
      return allData;
    } catch (error) {
      console.log("An error occurred when getting the pokemon", error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface PokemonState {
  loading: boolean;
  error: string | null;
  data: ActualPokemonCardResult[];
  searchList: ActualPokemonCardResult[];
  individualPokemon: ActualPokemonCardResult;
}

const initialState: PokemonState = {
  loading: false,
  error: null,
  data: [],
  searchList: [],
  individualPokemon: {} as ActualPokemonCardResult,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    filterPokemon: (state, action: PayloadAction<ActualPokemonCardResult>) => {
      state.individualPokemon = action.payload;
    },
    searchPokemon: (
      state,
      action: PayloadAction<ActualPokemonCardResult[]>
    ) => {
      state.searchList = action.payload;
    },
    resetSearch: (state, action: PayloadAction<ActualPokemonCardResult[]>) => {
      state.searchList = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPokemon.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(getPokemon.fulfilled, (state, action: PayloadAction<any>) => {
        state.data = action.payload;
        state.searchList = action.payload;
        state.loading = false;
      })
      .addCase(getPokemon.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});
export const { filterPokemon, searchPokemon, resetSearch } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
