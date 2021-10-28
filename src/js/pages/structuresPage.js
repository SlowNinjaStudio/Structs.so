import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

const page = 'structures';

const navbar = new Navbar(page, { droidHash: 'droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl' });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadStructuresByCreator('structures-list', 'droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl');
