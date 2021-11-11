import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance"
import {DroidApi} from "../api/DroidApi";
import {Footer} from "./common/Footer";
import {MechShootingAnimation} from "../animations/MechShootingAnimation";
import {AnimationBackground} from "../animations/AnimationBackground";
import {AnimationEngine} from "../vendor/animation/AnimationEngine";

const instance = new Instance();
await instance.init();

const page = 'animation';

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const animationBackground1 = (new AnimationBackground()).make();
const animatedMechShooting1 = (new MechShootingAnimation()).make();

const animationEngineAttack = new AnimationEngine('canvas-attack', { flipHorizontally: true });
animationEngineAttack.registerAnimatedObjects(animationBackground1);
animationEngineAttack.registerAnimatedObjects(animatedMechShooting1);
animationEngineAttack.play();

const animationBackground2 = (new AnimationBackground()).make();
const animatedMechShooting2 = (new MechShootingAnimation()).make();

const animationEngineDefend = new AnimationEngine('canvas-defend', {}, 10);
animationEngineDefend.registerAnimatedObjects(animationBackground2);
animationEngineDefend.registerAnimatedObjects(animatedMechShooting2);
animationEngineDefend.play();

const footer = new Footer();
footer.init('footer-wrapper');

let current_balance = await instance.queryBalance()
console.log("Balance " + current_balance.amount + current_balance.denom)

// shhhh don't loook here, kthnx.
if (current_balance.amount === 0) {
  let api = new DroidApi('https://', 'droid.sh')
  const obj = { address: instance.address,  coins: ['1337watt']}

  droidUi.loadWattReceivedModal(await api.performFaucetRequest(obj))
}
