import {DroidUI} from "../DroidUI";
import {Navbar} from "./common/Navbar";

const page = 'schematics';

const navbar = new Navbar(page);
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadStructures('structures-list');
