import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  games: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, game) => {
      let index = -1;

      state.games.forEach((gameData, gameIndex) => {
        if (gameData.payload.id === game.payload.id) {
          index = gameIndex;
        }
      });
      if (index === -1) {
        state.games = [...state.games, { ...game, amount: 1 }];
      } else {
        state.games[index].amount += 1;
      }
    },
    remove: (state, game) => {
      const index = state.games.indexOf(game);
      state.games[index].amount -= 1;
      if (state.games[index].amount <= 0) {
        state.games = state.games.splice(index, 1);
      }
    },
    setAmount: (state, game) => {
      let index;

      state.games.forEach((gameData, gameIndex) => {
        if (gameData.payload.id === game.payload.gameData.id) {
          index = gameIndex;
        }
      });

      state.games[index].amount = game.payload.amount;
      console.log(state.games);
    },
    deleteGame: (state, game) => {
      let index;
      
      state.games.forEach((gameData, gameIndex) => {
        if (gameData.payload.id === game.payload.id) {
          index = gameIndex;
        }
      });

      state.games.splice(index, 1)
    }
  },
});

export const { add, remove, setAmount, deleteGame } = cartSlice.actions;

export default cartSlice.reducer;
