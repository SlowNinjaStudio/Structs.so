import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

const page = 'structures';

const navbar = new Navbar(page);
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadStructuresByCreator('structures-list', 'battery1qs40zuw73uyjtc6j90mkyff43tyc9eh3cgvrxm');
