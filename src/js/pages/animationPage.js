import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance"
import {DroidApi} from "../api/DroidApi";
import {Footer} from "./common/Footer";
import {MechShootingAnimator} from "../animations/MechShootingAnimator";
import {BackgroundAnimator} from "../animations/BackgroundAnimator";
import {AnimationEngine} from "../vendor/animation/AnimationEngine";
import {DummyUtil} from "../util/DummyUtil";
import {AMBITS, FEATURES} from "../constants";
import {ShellDamageAnimator} from "../animations/ShellDamageAnimator";
import {DroidUI} from "../ui/DroidUI";
import {CarShootingAnimator} from "../animations/CarShootingAnimator";
import {MachineGunDamageAnimator} from "../animations/MachineGunDamageAnimator";

const instance = new Instance();
await instance.init();

const page = 'animation';

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();

const mech1 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.LAND, AMBITS.SKY],
  [FEATURES.ATTACK, FEATURES.POWER],
  100
);
const mech2 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.LAND],
  [FEATURES.ATTACK],
  100
);
const car1 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.LAND],
  [FEATURES.ATTACK],
  10
);
const car2 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.LAND],
  [FEATURES.ATTACK],
  10
);

const mechShootingAnimator = new MechShootingAnimator();
const backgroundAnimator = new BackgroundAnimator();
const shellDamageAnimator = new ShellDamageAnimator();
const carShootingAnimator = new CarShootingAnimator();
const machineGunDamageAnimator = new MachineGunDamageAnimator();

const animationBackground1 = await backgroundAnimator.animate(mech1);
const animatedMechShooting1 = await mechShootingAnimator.animate(mech1);
const animationEngineAttack1 = new AnimationEngine('canvas-attack-mech', {flipHorizontally: true});
animationEngineAttack1.registerAnimatedObjects(animationBackground1);
animationEngineAttack1.registerAnimatedObjects(animatedMechShooting1);
animationEngineAttack1.play();

const animationBackground2 = await backgroundAnimator.animate(mech2);
const shellDamage = await shellDamageAnimator.animate(mech2);
const animationEngineDefend1 = new AnimationEngine('canvas-defend-mech');
animationEngineDefend1.registerAnimatedObjects(animationBackground2);
animationEngineDefend1.registerAnimatedObjects(shellDamage);
animationEngineDefend1.play();

const animationBackground3 = await backgroundAnimator.animate(car1);
const animatedCarShooting1 = await carShootingAnimator.animate(car1);
const animationEngineAttack2 = new AnimationEngine('canvas-attack-car', {flipHorizontally: true});
animationEngineAttack2.registerAnimatedObjects(animationBackground3);
animationEngineAttack2.registerAnimatedObjects(animatedCarShooting1);
animationEngineAttack2.play();

const animationBackground4 = await backgroundAnimator.animate(car2);
const machineGunDamage = await machineGunDamageAnimator.animate(car2);
const animationEngineDefend2 = new AnimationEngine('canvas-defend-car');
animationEngineDefend2.registerAnimatedObjects(animationBackground4);
animationEngineDefend2.registerAnimatedObjects(machineGunDamage);
animationEngineDefend2.play();

const footer = new Footer();
footer.init('footer-wrapper');

let current_balance = await instance.queryBalance()
console.log("Balance " + current_balance.amount + current_balance.denom)

// shhhh don't loook here, kthnx.
if (parseInt(current_balance.amount) === 0) {
  let api = new DroidApi('https://', 'droid.sh')
  const obj = { address: instance.address,  coins: ['1337watt']}

  droidUi.loadWattReceivedModal(parseFloat(await api.performFaucetRequest(obj)));
}
