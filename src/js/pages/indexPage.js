import {DroidUI} from "../ui/DroidUI";
import {Navbar} from "./common/Navbar";
import {Instance} from "../models/Instance"
import {DroidApi} from "../api/DroidApi";

const instance = new Instance();
await instance.init();

const page = 'index';

const navbar = new Navbar(page, { searchEnabled: true });
navbar.init('nav-wrapper');

const droidUi = new DroidUI();
droidUi.loadStructures( 'structures-list', instance.address);

const searchHandler = function() {
  const searchString = document.getElementById('nav-search-input').value;
  droidUi.searchAndLoadStructures('structures-list', searchString, instance.address);
};

document.getElementById('nav-search-btn').addEventListener('click', searchHandler);
document.getElementById('nav-search-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchHandler(event);
  }
});

let current_balance = await instance.queryBalance()
console.log("Balance " + current_balance.amount + current_balance.denom)

// shhhh don't loook here, kthnx. 
if (current_balance.amount == 0) {

  let api = new DroidApi('http://', 'droid.sh')
  const obj = { address: instance.address,  coins: ['1337watt']}

  api.performFaucetRequest(obj)

}
