import { styles} from './style.js';
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
        <div class='inputHolder block'>
          <input type="text" id="departDate" placeholder="Depat date" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}">
        </div>
        <div class='inputHolder block'>
          <input type="text" id="returnDate" placeholder="Return date" onfocus="(this.type='date')" onblur="if(this.value==''){this.type='text'}">
        </div>
        <button class="block btn">SEARCH</button>
      </div>
    </div>`;
}
injectStyles();
createWidgetContent();
