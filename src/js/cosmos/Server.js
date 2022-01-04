import {Registry} from "@cosmjs/proto-signing";
import {assertIsBroadcastTxSuccess, defaultRegistryTypes, SigningStargateClient} from "@cosmjs/stargate";
import {
    MsgAttackStructure,
    MsgConnectStructure,
    MsgCreateReactor,
    MsgCreateSchematic, MsgCreateStructure, MsgDeleteReactor,
    MsgDeleteSchematic,
    MsgDeleteStructure,
    MsgDrainStructure, MsgRepairStructure,
    MsgUpdateInstance,
    MsgUpdateInstanceMood,
    MsgUpdateInstanceName, MsgUpdateReactor, MsgUpdateSchematic,
    MsgUpdateStructure,
    MsgStructureChargeSlot
} from "../types/di/tx";

/**
 * Server Client
 */
export class Server {
    constructor() {
        this.registry = new Registry([
            ...defaultRegistryTypes,
            ["/di.MsgUpdateInstanceName", MsgUpdateInstanceName],
            ["/di.MsgAttackStructure", MsgAttackStructure],
            ["/di.MsgUpdateStructure", MsgUpdateStructure],
            ["/di.MsgCreateSchematic", MsgCreateSchematic],
            ["/di.MsgConnectStructure", MsgConnectStructure],
            ["/di.MsgDeleteStructure", MsgDeleteStructure],
            ["/di.MsgDrainStructure", MsgDrainStructure],
            ["/di.MsgUpdateInstanceMood", MsgUpdateInstanceMood],
            ["/di.MsgDeleteSchematic", MsgDeleteSchematic],
            ["/di.MsgCreateReactor", MsgCreateReactor],
            ["/di.MsgUpdateInstance", MsgUpdateInstance],
            ["/di.MsgDeleteReactor", MsgDeleteReactor],
            ["/di.MsgRepairStructure", MsgRepairStructure],
            ["/di.MsgUpdateSchematic", MsgUpdateSchematic],
            ["/di.MsgUpdateReactor", MsgUpdateReactor],
            ["/di.MsgCreateStructure", MsgCreateStructure],
            ["/di.MsgStructureChargeSlot", MsgStructureChargeSlot]
        ]);

        this.rpcEndpoint = "wss://droid.sh:3000";
        this.client;
    }

    async init(instance_wallet) {
        const [test] = await instance_wallet.getAccounts();
        console.log(test.address)
       this.client = await SigningStargateClient.connectWithSigner(
            this.rpcEndpoint,
            instance_wallet,
            {registry: this.registry}
        );
    }

}
