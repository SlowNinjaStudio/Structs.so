import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";
import {Footer} from "./common/Footer";
import {Instance} from "../models/Instance";
import {DroidUIStatusCategory} from "../ui/components/DroidUIStatusCategory";

const instance = new Instance();
await instance.init();

const page = 'structures';

const navbar = new Navbar(page, { searchEnabled: true, droidHash: instance.address });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();

const statusDamaged = new DroidUIStatusCategory(
  'status-list-damaged',
  'error-container',
  '/img/icons/icon-health-half.png',
    'Half Heart Icon'
);
const statusTerawatt = new DroidUIStatusCategory(
  'status-list-terawatt',
  'success-container',
  '/img/icons/icon-power-tw.png',
  'terawatt Icon'
);
const statusGigawatt = new DroidUIStatusCategory(
  'status-list-gigawatt',
  'success-container',
  '/img/icons/icon-power-gw.png',
  'Gigawatt Icon'
);
const statusMegawatt = new DroidUIStatusCategory(
  'status-list-megawatt',
  'success-container',
  '/img/icons/icon-power-mw.png',
  'Megawatt Icon'
);
const statusKilowatt = new DroidUIStatusCategory(
  'status-list-kilowatt',
  'success-container',
  '/img/icons/icon-power-kw.png',
  'Kilowatt Icon'
);

const mainContentContainer = document.getElementById('main-content-container');
mainContentContainer.innerHTML = statusDamaged.render()
  + statusTerawatt.render()
  + statusGigawatt.render()
  + statusMegawatt.render()
  + statusKilowatt.render()
  + mainContentContainer.innerHTML;

droidUi.loadStructuresByCreator(
  'structures-list',
  'status-list-damaged',
  'status-list-kilowatt',
  'status-list-megawatt',
  'status-list-gigawatt',
  'status-list-terawatt',
  instance.address
);

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

