import classes from "./Cat.module.css";

function Cat(props) {
  return (
    <div clasName={classes.wrapper}>
      <div className={classes.ImageDisplay}>
        <img className={classes.img} />
      </div>

      <div className={classes.catInfo}></div>

      <div className={classes.description}></div>

      <div className={classes.count}></div>

      <div className={classes.buttons}>
        <button disabled>Previous</button>
        <button>Random</button>
        <button disabled>Next</button>
      </div>
    </div>
  );
}

export default Cat;
