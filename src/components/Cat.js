import classes from "./Cat.module.css";

function Cat(props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.ImageDisplay}>
        <img className={classes.img} src={props.image}/>
      </div>

      <div className={classes.catInfo}>
          <p> {props.breed} </p>
          <p> {props.alt_names} </p>
      </div>

      <div className={classes.description}>
          <p> {props.description} </p>
      </div>

      <div className={classes.count}>
          <p> {props.index + 1} </p>
      </div>

      <div className={classes.buttons}>
        <button disabled={props.index === 0} onClick={props.onDecrement}>Previous</button>
        <button onClick={props.onRandom}>Random</button>
        <button disabled>Next</button>
      </div>
    </div>
  );
}

export default Cat;
