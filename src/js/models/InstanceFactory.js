import {Instance} from "./Instance";

export class InstanceFactory {
  make(obj) {
    let instance = new Instance();
    instance.stub(obj.creator, obj.name, obj.mood, BigInt(obj.watt_under_management.amount));
    return instance;
  }
}
