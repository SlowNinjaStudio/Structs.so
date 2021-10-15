import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

const page = 'schematics';

const navbar = new Navbar(page);
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadSchematicsByCreator('battery1qs40zuw73uyjtc6j90mkyff43tyc9eh3cgvrxm','schematics-list');
