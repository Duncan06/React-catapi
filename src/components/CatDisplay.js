import classes from "./CatDisplay.module.css";

function CatDisplay(props) {
  return (
    <div class="wrapper">
      <div class="ImageDisplay">
        <img />
      </div>

      <div class="catInfo"></div>

      <div class="description"></div>

      <div class="count"></div>

      <div class="buttons">
        <button id="previous" disabled>
          Previous
        </button>
        <button id="random">Random</button>
        <button id="next" disabled>
          Next
        </button>
      </div>
    </div>
  );
}

export default CatDisplay;
