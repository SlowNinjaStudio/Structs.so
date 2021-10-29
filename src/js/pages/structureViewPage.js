import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";
import {Footer} from "./common/Footer";

const page = 'structure';

const navbar = new Navbar(page, { droidHash: 'droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl' });
navbar.init('nav-wrapper');

const urlParams = new URLSearchParams(window.location.search);
const structureId = urlParams.get('structure_id');

const droidUi = new DroidUI();
droidUi.loadSingleStructure('structure', structureId, 'droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl');

const footer = new Footer();
footer.init('footer-wrapper');
