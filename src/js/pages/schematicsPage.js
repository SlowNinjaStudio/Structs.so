import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

import {Instance} from "../models/Instance";

const instance = new Instance();
await instance.init();

const page = 'schematics';

const navbar = new Navbar(page);
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadSchematicsByCreator('schematics-list', instance.address);
