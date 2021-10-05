import { useState, useEffect } from "react";
import CatDisplay from "./components/CatDisplay";
import classes from "./App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCats, setLoadedCats] = useState([]);
  const [catIndex, setCatIndex] = useState(-1);
  const [catArraySize, setCatArraySize] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    random();
  }, []);

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
  

  if (isLoading || (loadedCats.length !== catArraySize)) {
    return (
      <div className={classes.wrapper}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <CatDisplay catGallery={loadedCats} onRandom={random} onIncrement={increment} 
       onDecrement={decrement} catIndex={catIndex} arraySize={catArraySize} />
    </div>
  );
}

export default App;
