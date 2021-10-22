import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";

import {DroidUISchematicRDForm} from "../ui/components/DroidUISchematicRDForm"
import {DroidUIComputeStatus} from "../ui/components/DroidUIComputeStatus"



const page = 'research';

const navbar = new Navbar(page);
navbar.init('nav-wrapper');



const schematic_design_form = new DroidUISchematicRDForm();
schematic_design_form.init('schematic_rd_form');
schematic_design_form.initMainButtonEventListeners();
schematic_design_form.initOptionsEventListeners(); 

const compute_status = new DroidUIComputeStatus();
compute_status.init('compute_status', schematic_design_form.program)



