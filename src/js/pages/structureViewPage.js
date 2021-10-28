import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance";

const instance = new Instance();
await instance.init();

const page = 'structure';

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const urlParams = new URLSearchParams(window.location.search);
const structureId = urlParams.get('structure_id');

const droidUi = new DroidUI();
droidUi.loadSingleStructure('structure', structureId, instance.address);

