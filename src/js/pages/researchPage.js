import {Navbar} from "./common/Navbar";

import {DroidUISchematicRDForm} from "../ui/components/DroidUISchematicRDForm"


const page = 'research';

const navbar = new Navbar(page, { droidHash: 'droid1f0v3m6pfwg68ns3wvk49t84awgvyz64j35uxjl' });
navbar.init('nav-wrapper');

const schematic_design_form = new DroidUISchematicRDForm();
schematic_design_form.init('schematic_rd_form');
schematic_design_form.initMainButtonEventListeners();
schematic_design_form.initOptionsEventListeners();
