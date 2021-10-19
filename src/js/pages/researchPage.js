import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

import {UISchematicRDForm} from "../ui/components/UISchematicRDForm"



const page = 'research';

const navbar = new Navbar(page);
navbar.init('nav-wrapper');



const schematic_design_form = new UISchematicRDForm();
schematic_design_form.init('schematic_rd_form');
schematic_design_form.initMainButtonEventListeners();
schematic_design_form.initOptionsEventListeners(); 



