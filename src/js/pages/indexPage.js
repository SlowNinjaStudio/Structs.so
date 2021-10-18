import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

const page = 'index';

const navbar = new Navbar(page, { searchEnabled: true });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadStructures( 'structures-list', 'battery1qs40zuw73uyjtc6j90mkyff43tyc9eh3cgvrxm');

const searchHandler = function() {
  const searchString = document.getElementById('nav-search-input').value;
  droidUi.searchAndLoadStructures('structures-list', searchString, 'battery1qs40zuw73uyjtc6j90mkyff43tyc9eh3cgvrxm');
};

document.getElementById('nav-search-btn').addEventListener('click', searchHandler);
document.getElementById('nav-search-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchHandler(event);
  }
});
