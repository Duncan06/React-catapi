import Cat from "./Cat";
import classes from "./CatDisplay.module.css";

function CatDisplay(props) {
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

          catGallery.push(cat);
        }
      });
  }

  function decrement() {
    count--;
    images.src = CatGallery[count].url;
    next.disabled = false;
    if (count == 0) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
    updateIndex();
    catInfo();
  }

  function increment() {
    count++;
    images.src = CatGallery[count].url;

    if (count != 0) {
      previous.disabled = false;
    }

    if (count == CatGallery.length - 1) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
    updateIndex();
    catInfo();
  }

  function updateIndex() {
    return (
      <p>
        ${count + 1} / ${CatGallery.length}
      </p>
    );
  }

  function catInfo() {
    if (
      CatGallery[count].breeds.length != 0 &&
      "alt_names" in CatGallery[count].breeds[0] &&
      CatGallery[count].breeds[0].alt_names != ""
    ) {
      <div>
        <p> Breed: ${CatGallery[count].breeds[0].name} </p>
        <p> Alternative name: ${CatGallery[count].breeds[0].alt_names} </p>
        <p> Description: ${CatGallery[count].breeds[0].description} </p>
      </div>;
    } else if (CatGallery[count].breeds.length != 0) {
      <div>
        <p> Breed: ${CatGallery[count].breeds[0].name} </p>
        <p> Alternative name: Unavailable </p>
        <p> Description: ${CatGallery[count].breeds[0].description} </p>
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
