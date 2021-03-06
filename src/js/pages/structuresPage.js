import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";
import {Footer} from "./common/Footer";
import {Instance} from "../models/Instance";

const instance = new Instance();
await instance.init();

const page = 'structures';

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();

droidUi.loadStructuresByCreator('structures-list', instance.address);


const footer = new Footer();
footer.init('footer-wrapper');

