import classes from "./CatDisplay.module.css";

function CatDisplay(props) {

  function catInfo() {
    if (
      props.catGallery[props.catIndex].breeds.length != 0 &&
      "alt_names" in props.catGallery[props.catIndex].breeds[0] &&
      props.catGallery[props.catIndex].breeds[0].alt_names != ""
    ) { 
      return (
        <div className={classes.infoContainer}> 
          <div className={classes.catInfo}>  
            <p> Breed: {props.catGallery[props.catIndex].breeds[0].name} </p>
            <p> Alternative name: {props.catGallery[props.catIndex].breeds[0].alt_names} </p>
          </div>
          <div className={classes.description}>
            <p> Description: {props.catGallery[props.catIndex].breeds[0].description} </p>
          </div>
        </div>
      )
    } else if (props.catGallery[props.catIndex].breeds.length != 0) {
      return (
        <div className={classes.infoContainer}>
          <div className={classes.catInfo}>
            <p> Breed: {props.catGallery[props.catIndex].breeds[0].name} </p>
            <p> Alternative name: Unavailable </p>
          </div>

          <div className={classes.description}>
            <p> Description: {props.catGallery[props.catIndex].breeds[0].description} </p>
          </div>
        </div>
      )
    } else {
      return (
        <div className={classes.infoContainer}>
          <div className={classes.catInfo}>
            <p> Breed: Unavailable </p>
            <p> Alternative name: Unavailable </p>
          </div>

          <div className={classes.description}>
            <p> Description: Unavailable </p>
          </div>
        </div>
      )
    }
  }

  return (
      <div className={classes.wrapper}>
      <div className={classes.ImageDisplay}>
        <img className={classes.img} src={props.catGallery[props.catIndex].url}/>
      </div>

      {catInfo()}

      <div className={classes.count}>
          <p> {props.catIndex + 1} / {props.arraySize} </p>
      </div>

      <div className={classes.buttons}>
        <button disabled={props.catIndex === 0} onClick={props.onDecrement}>Previous</button>
        <button onClick={props.onRandom}>Random</button>
        <button disabled={props.catIndex === props.arraySize -1} onClick={props.onIncrement}>Next</button>
      </div>
    </div>
  );
}

export default CatDisplay;
