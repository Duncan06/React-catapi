import Cat from "./Cat";
import classes from "./CatDisplay.module.css";

function CatDisplay(props) {
  let count = 0;

  function random() {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (const key in data) {
          const cat = {
            id: key,
            ...data[key],
          };

          props.catGallery.push(cat);
        }
      });
  }

  function decrement() {
    count--;

    updateIndex();
    catInfo();
  }

  function increment() {
    count++;

    updateIndex();
    catInfo();
  }

  function updateIndex() {
    return (
      <p>
        ${count + 1} / ${props.CatGallery.length}
      </p>
    );
  }

  function catInfo() {
    if (
      props.CatGallery[count].breeds.length != 0 &&
      "alt_names" in props.CatGallery[count].breeds[0] &&
      props.CatGallery[count].breeds[0].alt_names != ""
    ) {
      <div>
        <p> Breed: ${props.CatGallery[count].breeds[0].name} </p>
        <p> Alternative name: ${props.CatGallery[count].breeds[0].alt_names} </p>
        <p> Description: ${props.CatGallery[count].breeds[0].description} </p>
      </div>;
    } else if (props.CatGallery[count].breeds.length != 0) {
      <div>
        <p> Breed: ${props.CatGallery[count].breeds[0].name} </p>
        <p> Alternative name: Unavailable </p>
        <p> Description: ${props.CatGallery[count].breeds[0].description} </p>
      </div>;
    } else {
      <div>
        <p> Breed: Unavailable </p>
        <p> Alternative name: Unavailable </p>
        <p> Description: Unavailable </p>
      </div>;
    }
  }

  return (
    <div>
      {props.catGallery.map((cat) => (
        <Cat
          key={cat.id}
          id={cat.id}
          image={cat.image}
          catInfo={catInfo()}
          index={updateIndex()}
          OnIncrement={increment}
          OnDecrement={decrement}
          OnRandom={random}
        />
      ))}
    </div>
  );
}

export default CatDisplay;
