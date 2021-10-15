import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

const page = 'structures';

const navbar = new Navbar(page);
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadStructures('structures-list');
