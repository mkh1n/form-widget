import { styles } from './style.js';
const injectStyles = () => {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
  document.head.appendChild(styleTag);
}

const createWidgetContent = () => {
  document.querySelector('#widget').innerHTML = `
    <div class="header">Where does it come from? Why do we use it?</div>
    <div class="contentHolder">
      <div class="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
      <div id="dateHolder">
        <input type="date" class="block" id="departDate">
        <input type="date" class="block" id="returnDate">
        <button class="block btn">SEARCH</button>
      </div>
    </div>`;
}
injectStyles();
createWidgetContent();
