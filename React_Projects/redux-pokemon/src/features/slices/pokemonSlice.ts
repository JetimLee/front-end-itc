import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const getPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (_data, thunkApi) => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      console.log(data, "data from getPokemon");
      return data;
    } catch (error) {
      console.log("An error occurred when getting the pokemon", error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface PokemonState {
  loading: boolean;
  error: string | null;
  data: any[] | null;
}

const initialState: PokemonState = {
  loading: false,
  error: null,
  data: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPokemon.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(getPokemon.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPokemon.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
