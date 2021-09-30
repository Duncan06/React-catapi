import classes from "./CatDisplay.module.css";

function CatDisplay(props) {
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
    document.querySelector(".count").innerHTML = `<p> ${count + 1} / ${
      CatGallery.length
    } </p>`;
  }

  function catInfo() {
    if (
      CatGallery[count].breeds.length != 0 &&
      "alt_names" in CatGallery[count].breeds[0] &&
      CatGallery[count].breeds[0].alt_names != ""
    ) {
      document.querySelector(".catInfo").innerHTML = `
           <p> Breed: ${CatGallery[count].breeds[0].name} </p>
           <p> Alternative name: ${CatGallery[count].breeds[0].alt_names} </p>`;
      document.querySelector(".description").innerHTML = `
          <p> Description: ${CatGallery[count].breeds[0].description} </p>`;
    } else if (CatGallery[count].breeds.length != 0) {
      document.querySelector(".catInfo").innerHTML = `
           <p> Breed: ${CatGallery[count].breeds[0].name} </p>
           <p> Alternative name: Unavailable </p>`;
      document.querySelector(".description").innerHTML = `
          <p> Description: ${CatGallery[count].breeds[0].description} </p>`;
    } else {
      document.querySelector(".catInfo").innerHTML = `
           <p> Breed: Unavailable </p>
           <p> Alternative name: Unavailable </p>`;
      document.querySelector(".description").innerHTML = `
          <p> Description: Unavailable </p>`;
    }
  }

  return (
    <div clasName={classes.wrapper}>
      <div className={classes.ImageDisplay}>
        <img className={classes.img} />
      </div>

      <div className={classes.catInfo}></div>

      <div className={classes.description}></div>

      <div className={classes.count}></div>

      <div className={classes.buttons}>
        <button disabled onClick={decrement}>Previous</button>
        <button>Random</button>
        <button disabled onClick={increment}>Next</button>
      </div>
    </div>
  );
}

export default CatDisplay;
