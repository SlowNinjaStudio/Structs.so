import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

const page = 'structure';

const navbar = new Navbar(page);
navbar.init('nav-wrapper');

const urlParams = new URLSearchParams(window.location.search);
const structureId = urlParams.get('structure_id');

const droidUi = new DroidUI();
droidUi.loadSingleStructure('structure', structureId, 'battery1qs40zuw73uyjtc6j90mkyff43tyc9eh3cgvrxm');
