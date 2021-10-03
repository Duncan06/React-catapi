import Cat from "./Cat";

function CatDisplay(props) {

  function catInfo() {
    if (
      props.catGallery[props.catIndex].breeds.length != 0 &&
      "alt_names" in props.catGallery[props.catIndex].breeds[0] &&
      props.catGallery[props.catIndex].breeds[0].alt_names != ""
    ) {
      <div>
        <p> Breed: ${props.catGallery[props.catIndex].breeds[0].name} </p>
        <p> Alternative name: ${props.catGallery[props.catIndex].breeds[0].alt_names} </p>
        <p> Description: ${props.catGallery[props.catIndex].breeds[0].description} </p>
      </div>;
    } else if (props.catGallery[props.catIndex].breeds.length != 0) {
      <div>
        <p> Breed: ${props.catGallery[props.catIndex].breeds[0].name} </p>
        <p> Alternative name: Unavailable </p>
        <p> Description: ${props.catGallery[props.catIndex].breeds[0].description} </p>
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
      <Cat
        key={props.catGallery[props.catIndex].id}
        image={props.catGallery[props.catIndex].url}
        catInfo={catInfo()}
        index={props.catIndex}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
        onRandom={props.onRandom}
        arraySize={props.arraySize}
      />
    </div>
  );
}

export default CatDisplay;
