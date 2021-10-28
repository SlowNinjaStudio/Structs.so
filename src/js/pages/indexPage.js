import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

const page = 'index';

const navbar = new Navbar(page, { searchEnabled: true, droidHash: 'droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl' });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadStructures( 'structures-list', 'droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl');

const searchHandler = function() {
  const searchString = document.getElementById('nav-search-input').value;
  droidUi.searchAndLoadStructures('structures-list', searchString, 'droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl');
};

document.getElementById('nav-search-btn').addEventListener('click', searchHandler);
document.getElementById('nav-search-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchHandler(event);
  }
});
