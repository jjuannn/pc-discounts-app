import { useState } from "react";

export default function useUser() {
  const [lowerPrice, setLowerPrice] = useState(0);
  const [higherPrice, setHigherPrice] = useState(1);
  const [gameTitle, setGameTitle] = useState("");

  const changeLowerPrice = ({ target }) => {
    const { value } = target;
    const newLowerPrice = Number(value);
    if (newLowerPrice >= higherPrice) {
      setHigherPrice(newLowerPrice + 1);
    }
    setLowerPrice(newLowerPrice);
  };

  const changeHigherPrice = ({ target }) => {
    const { value } = target;
    const newHigherPrice = Number(value);
    if (newHigherPrice <= lowerPrice) {
      setLowerPrice(newHigherPrice - 1);
    }
    setHigherPrice(newHigherPrice);
  };

  const changeGameTitle = ({ target }) => {
    const { value } = target;
    setGameTitle(value);
  };

  return {
    gameTitle,
    lowerPrice,
    higherPrice,
    changeGameTitle,
    changeLowerPrice,
    changeHigherPrice,
  };
}
