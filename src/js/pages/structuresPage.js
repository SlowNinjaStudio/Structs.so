import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";
import {Footer} from "./common/Footer";
import {Instance} from "../models/Instance";

const instance = new Instance();
await instance.init();

const page = 'structures';

const navbar = new Navbar(page, { searchEnabled: true, droidHash: instance.address });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();

droidUi.loadStructuresByCreator('structures-list', instance.address);

const footer = new Footer();
footer.init('footer-wrapper');

const searchHandler = function() {
  const searchString = document.getElementById('nav-search-input').value;
  droidUi.searchAndLoadStructuresByCreator('structures-list', searchString, instance.address);
};

document.getElementById('nav-search-btn').addEventListener('click', searchHandler);
document.getElementById('nav-search-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchHandler(event);
  }
});

