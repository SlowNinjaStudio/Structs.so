import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance"
import {DroidApi} from "../api/DroidApi";
import {Footer} from "./common/Footer";
import {MechShootingAnimator} from "../animations/MechShootingAnimator";
import {BackgroundAnimator} from "../animations/BackgroundAnimator";
import {AnimationEngine} from "../vendor/animation/AnimationEngine";
import {DummyUtil} from "../util/DummyUtil";
import {AMBITS, FEATURES} from "../constants";

const instance = new Instance();
await instance.init();

const page = 'animation';

const navbar = new Navbar(page, { droidHash: instance.address });
navbar.init('nav-wrapper');

const mech1 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.LAND, AMBITS.SKY],
  [FEATURES.ATTACK, FEATURES.POWER],
  100
)
const mech2 = DummyUtil.getDummyStructure(
  true,
  [AMBITS.LAND],
  [FEATURES.ATTACK],
  100
)

const mechShootingAnimator = new MechShootingAnimator();
const backgroundAnimator = new BackgroundAnimator();

const animationBackground1 = backgroundAnimator.animate(mech1);
const animatedMechShooting1 = mechShootingAnimator.animate(mech1);
const animationEngineAttack = new AnimationEngine('canvas-attack-mech', { flipHorizontally: true });
animationEngineAttack.registerAnimatedObjects(animationBackground1);
animationEngineAttack.registerAnimatedObjects(animatedMechShooting1);
animationEngineAttack.play();

const animationBackground2 = backgroundAnimator.animate(mech2);
const animatedMechShooting2 = mechShootingAnimator.animate(mech2);
const animationEngineDefend = new AnimationEngine('canvas-defend-mech', {}, 10);
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
