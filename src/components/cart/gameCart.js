import React, { useEffect, useState } from "react";
import "./gameCart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { setAmount, deleteGame } from "../../redux/cartSlice";

const GameCart = ({ game }) => {
  const [gameData, setGameData] = useState(game.payload);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      document.getElementById(`gameCart__amountNumber${gameData.id}`).value ===
      ""
    ) {
      document.getElementById(`gameCart__amountNumber${gameData.id}`).value = 0;
    }
  }, []);

  useEffect(() => {
    setGameData(game.payload);
  }, [game.payload]);

  useEffect(() => {
    setPrice(game?.amount * 59.99);
  }, [game?.amount]);

  const changeInput = (event) => {
    event.preventDefault();

    let value = parseInt(event.target.value);
    const max = parseInt(
      document.getElementById(`gameCart__amountNumber${gameData.id}`).max
    );
    const min = parseInt(
      document.getElementById(`gameCart__amountNumber${gameData.id}`).min
    );

    if (value > max) {
      document.getElementById(`gameCart__amountNumber${gameData.id}`).value =
        max;
      value = max;
    }

    if (value < min) {
      document.getElementById(`gameCart__amountNumber${gameData.id}`).value =
        min;
      value = min;
    }

    changeGameAmount(value);
  };

  const minusOneGame = () => {
    const inputValue = document.getElementById(
      `gameCart__amountNumber${gameData.id}`
    ).value;
    let value = inputValue ? parseInt(inputValue) : 0;
    value -= 1;
    const min = parseInt(
      document.getElementById(`gameCart__amountNumber${gameData.id}`).min
    );

    if (value < min) {
      document.getElementById(`gameCart__amountNumber${gameData.id}`).value =
        min;
      return;
    }

    document.getElementById(`gameCart__amountNumber${gameData.id}`).value =
      value;

    changeGameAmount(value);
  };

  const addOneGame = () => {
    const inputValue = document.getElementById(
      `gameCart__amountNumber${gameData.id}`
    ).value;
    let value = inputValue ? parseInt(inputValue) : 0;
    value += 1;
    const max = parseInt(
      document.getElementById(`gameCart__amountNumber${gameData.id}`).max
    );

    if (value > max) {
      return;
    }

    document.getElementById(`gameCart__amountNumber${gameData.id}`).value =
      value;

    changeGameAmount(value);
  };

  const changeGameAmount = (value) => {
    dispatch(setAmount({ gameData: gameData, amount: value }));
  };

  const removeGame = () => {
    dispatch(deleteGame(gameData));
  };

  return (
    <div className="gameCart">
      <div className="gameCart__left">
        <img
          className="gameCart__img"
          src={gameData?.background_image}
          alt=""
        />
        <h6 className="gameCart__title">{gameData?.name}</h6>
      </div>
      <div className="gameCart__right">
        <div className="gameCart__amount">
          <button
            className="gameCart__amountBtn gameCart__amountBtnRemove"
            onClick={(event) => minusOneGame()}
          >
            <RemoveIcon fontSize="small" />
          </button>
          <input
            type="number"
            min={0}
            max={99}
            defaultValue={game?.amount}
            onChange={(event) => changeInput(event)}
            className="gameCart__amountNumber"
            id={`gameCart__amountNumber${gameData.id}`}
          />
          <button
            className="gameCart__amountBtn gameCart__amountBtnAdd"
            onClick={(event) => addOneGame()}
          >
            <AddIcon fontSize="small" />
          </button>
          <button
            className="gameCart__amountBtn gameCart__amountBtnTrash"
            onClick={() => removeGame()}
          >
            <DeleteIcon fontSize="small" />
          </button>
        </div>
        <div className="gameCart__price">
          ${price ? price.toFixed(2) : "0.00"}
        </div>
      </div>
    </div>
  );
};

export default GameCart;
