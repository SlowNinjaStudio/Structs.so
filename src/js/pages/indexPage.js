import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance"


const instance = new Instance();
await instance.init();

const page = 'index';

const navbar = new Navbar(page, { searchEnabled: true });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadStructures( 'structures-list', instance.address);

const searchHandler = function() {
  const searchString = document.getElementById('nav-search-input').value;
  droidUi.searchAndLoadStructures('structures-list', searchString, instance.address);
};

document.getElementById('nav-search-btn').addEventListener('click', searchHandler);
document.getElementById('nav-search-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchHandler(event);
  }
});
