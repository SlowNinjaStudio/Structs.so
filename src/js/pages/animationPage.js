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
import {CityShootingAnimator} from "../animations/CityShootingAnimator";
import {LaserDamageAnimator} from "../animations/LaserDamageAnimator";
import {StationShootingAnimator} from "../animations/StationShootingAnimator";
import {AntiAirDamageAnimator} from "../animations/AntiAirDamageAnimator";
import {PostDamageSmokeAnimator} from "../animations/PostDamageSmokeAnimator";

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
const city1 = DummyUtil.getDummyStructure(
  false,
  [AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.POWER],
  100
);
const city2 = DummyUtil.getDummyStructure(
  false,
  [AMBITS.SPACE],
  [FEATURES.DEFENSIVE, FEATURES.ENGINEERING, FEATURES.POWER],
  100
);
const station1 = DummyUtil.getDummyStructure(
  false,
  [AMBITS.WATER, AMBITS.LAND, AMBITS.SKY, AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.POWER, FEATURES.ENGINEERING],
  10
);
const station2 = DummyUtil.getDummyStructure(
  false,
  [AMBITS.SPACE],
  [FEATURES.DEFENSIVE, FEATURES.ENGINEERING, FEATURES.POWER],
  10
);
const station3 = DummyUtil.getDummyStructure(
  false,
  [AMBITS.WATER, AMBITS.SPACE],
  [FEATURES.ATTACK, FEATURES.DEFENSIVE, FEATURES.ENGINEERING, FEATURES.POWER],
  10
);

const backgroundAnimator = new BackgroundAnimator();

const mechShootingAnimator = new MechShootingAnimator();
const shellDamageAnimator = new ShellDamageAnimator();

const carShootingAnimator = new CarShootingAnimator();
const machineGunDamageAnimator = new MachineGunDamageAnimator();

const cityShootingAnimator = new CityShootingAnimator();
const laserDamageAnimator = new LaserDamageAnimator();

const stationShootingAnimator = new StationShootingAnimator();
const antiAirDamageAnimator = new AntiAirDamageAnimator();

const postDamageSmokeAnimator = new PostDamageSmokeAnimator();

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
const animatedCarShooting = await carShootingAnimator.animate(car1);
const animationEngineAttack2 = new AnimationEngine('canvas-attack-car', {flipHorizontally: true});
animationEngineAttack2.registerAnimatedObjects(animationBackground3);
animationEngineAttack2.registerAnimatedObjects(animatedCarShooting);
// animationEngineAttack2.play();

const animationBackground4 = await backgroundAnimator.animate(car2);
const machineGunDamage = await machineGunDamageAnimator.animate(car2);
const animationEngineDefend2 = new AnimationEngine('canvas-defend-car');
animationEngineDefend2.registerAnimatedObjects(animationBackground4);
animationEngineDefend2.registerAnimatedObjects(machineGunDamage);
// animationEngineDefend2.play();

const animationBackground5 = await backgroundAnimator.animate(city1);
const animatedCityShooting = await cityShootingAnimator.animate(city1);
const animationEngineAttack3 = new AnimationEngine('canvas-attack-city', {flipHorizontally: true});
animationEngineAttack3.registerAnimatedObjects(animationBackground5);
animationEngineAttack3.registerAnimatedObjects(animatedCityShooting);
// animationEngineAttack3.play();

const animationBackground6 = await backgroundAnimator.animate(city2);
const laserDamage = await laserDamageAnimator.animate(city2);
const animationEngineDefend3 = new AnimationEngine('canvas-defend-city');
animationEngineDefend3.registerAnimatedObjects(animationBackground6);
animationEngineDefend3.registerAnimatedObjects(laserDamage);
// animationEngineDefend3.play();

const animationBackground7 = await backgroundAnimator.animate(station1);
const animatedStationShooting1 = await stationShootingAnimator.animate(station1);
const animationEngineAttack4 = new AnimationEngine('canvas-attack-station', {flipHorizontally: true});
animationEngineAttack4.registerAnimatedObjects(animationBackground7);
animationEngineAttack4.registerAnimatedObjects(animatedStationShooting1);
// animationEngineAttack4.play();

const animationBackground8 = await backgroundAnimator.animate(station2);
const antiAirDamage = await antiAirDamageAnimator.animate(station2);
const animationEngineDefend4 = new AnimationEngine('canvas-defend-station');
animationEngineDefend4.registerAnimatedObjects(animationBackground8);
animationEngineDefend4.registerAnimatedObjects(antiAirDamage);
// animationEngineDefend4.play();

const animationBackground9 = await backgroundAnimator.animate(station3);
const postDamageSmoke = await postDamageSmokeAnimator.animate(station3);
const animationEnginePostDamage1 = new AnimationEngine('canvas-post-damage-smoke-station');
animationEnginePostDamage1.registerAnimatedObjects(animationBackground9);
animationEnginePostDamage1.registerAnimatedObjects(postDamageSmoke);
// animationEnginePostDamage1.play();

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
