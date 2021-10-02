import { useState, useEffect } from "react";
import CatDisplay from "./components/CatDisplay";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCats, setLoadedCats] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const catGallery = [];

        for (const key in data) {
          const cat = {
            id: key,
            ...data[key],
          };

          catGallery.push(cat);
        }

        setIsLoading(false);
        setLoadedCats(catGallery);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading..</p>
      </section>
    );
  }

  return (
    <div>
      <CatDisplay catGallery={loadedCats} />
    </div>
  );
}

export default App;
