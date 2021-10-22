import { useState, useEffect } from "react";
import CatDisplay from "./components/CatDisplay";
import classes from "./App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const item = localStorage.getItem("catArray");
  const [loadedCats, setLoadedCats] = useState(item ? JSON.parse(item) : []);
  const [catIndex, setCatIndex] = useState(-1);
  const [catArraySize, setCatArraySize] = useState(item ? loadedCats.length : 0);

  useEffect(() => {
    setIsLoading(true);
    random();
  }, []);

  useEffect(() => {
    localStorage.setItem("catArray", JSON.stringify(loadedCats));
  });

  function random() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedCats([...loadedCats, data[0]]);
      });
    increment();
    setCatArraySize((catArraySize) => ++catArraySize);
  }

  function decrement() {
    setCatIndex((catIndex) => --catIndex);
  }

  function increment() {
    setCatIndex((catIndex) => ++catIndex);
  }

  function reset() {
    localStorage.removeItem("catArray");
    window.location.reload();
  }

  if (isLoading || loadedCats.length !== catArraySize) {
    return (
      <div className={classes.wrapper}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <CatDisplay
        catGallery={loadedCats}
        onRandom={random}
        onIncrement={increment}
        onDecrement={decrement}
        catIndex={catIndex}
        arraySize={catArraySize}
        onReset={reset}
      />
    </div>
  );
}

export default App;
