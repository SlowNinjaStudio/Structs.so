import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";
import {Footer} from "./common/Footer";

import {Instance} from "../models/Instance";

const instance = new Instance();
await instance.init();

const page = 'schematics';

const navbar = new Navbar(page, { searchEnabled: true, droidHash: instance.address});
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadSchematicsByCreator('schematics-list', instance.address);

const footer = new Footer();
footer.init('footer-wrapper');

const searchHandler = function() {
  const searchString = document.getElementById('nav-search-input').value;
  droidUi.searchAndLoadSchematicsByCreator('schematics-list', searchString, instance.address);
};

document.getElementById('nav-search-btn').addEventListener('click', searchHandler);
document.getElementById('nav-search-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchHandler(event);
  }
});
