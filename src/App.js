import { useState, useEffect } from "react";
import CatDisplay from "./components/CatDisplay";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCats, setLoadedCats] = useState([]);
  const [catIndex, setCatIndex] = useState(-1);

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
  }

  function decrement() {
    setCatIndex((catIndex) => --catIndex);
  }

  function increment() {
    setCatIndex((catIndex) => ++catIndex);
  }

  if (isLoading || !loadedCats.length) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <CatDisplay catGallery={loadedCats} onRandom={random} onIncrement={increment} 
       onDecrement={decrement} catIndex={catIndex} />
    </div>
  );
}

export default App;
