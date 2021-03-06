import { stringToPath, Random, Bip39 } from "@cosmjs/crypto";
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";

import {Server} from "../cosmos/Server"
import {assertIsBroadcastTxSuccess, BankExtension} from "@cosmjs/stargate";

/**
 * Instance Model
 */
export class Instance {
    constructor() {
        this.name = '';
        this.mood = '';

        this.wallet;
        this.address = '';

        this.mnemonic;
    }

    /*
     * force = true //destroys old account!
     *
     * Should probably create some sort of account
     * graveyard instead of just saving over the old one
     */
   async init(mnemonic = '', force = false) {
       let identity = JSON.parse(localStorage.getItem('identity'));

        if (identity === null || (typeof identity === 'undefined') || force) {
            identity = await this.createIdentity(mnemonic);
        }

        console.log(identity.address)
        this.name = identity.name;
        this.mood = identity.mood;
        this.mnemonic = identity.mnemonic;
        this.address = identity.address;

    }

    /*
     * Used if you just want to pull from the local storage without the
     * possibility of create. Main benefit is that there is no async/await.
     */
     lazyLoad() {
      let identity = JSON.parse(localStorage.getItem('identity'));

      if (!(identity === null || (typeof identity === 'undefined'))) {

        this.name = identity.name;
        this.mood = identity.mood;
        this.mnemonic = identity.mnemonic;
        this.address = identity.address;

      }
    }

    async createIdentity(mnemonic) {

        if ( mnemonic == '') {
            console.log('Generating new mnemonic because none was provided.');

            // Add this constant (16) to the constants.js file
            const getNewRandom = Random.getBytes(16);
            mnemonic = Bip39.encode(getNewRandom).toString();
        }


        this.mnemonic = mnemonic;
        const [account] = await this.getAccounts();

        const identity = {
            name: null,
            mood: null,
            mnemonic: mnemonic,
            address: account.address
        }


        localStorage.setItem('identity', JSON.stringify(identity));

        return identity;


    }
    async getWallet() {

        // Path and Prefix should both me constants in constant.js
        this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(
            this.mnemonic,
            stringToPath("m/44'/118'/0'/0/0"),
            "droid"
        );

        return this.wallet;
    }

    async setName(new_name, fee) {
        let server = new Server();
        await server.init(await this.getWallet());

        const msgRename = {
            typeUrl: "/di.MsgUpdateInstanceName",
            value: {
                creator: this.address,
                name: new_name
            }
        };

        let result = await server.client.signAndBroadcast(this.address, [msgRename], fee);
        assertIsBroadcastTxSuccess(result);

        this.name = new_name;
        this.saveLocalInstance();
    }

    async setMood(new_mood, fee) {
        let server = new Server();
        await server.init(await this.getWallet());

        const msgRemood = {
            typeUrl: "/di.MsgUpdateInstanceMood",
            value: {
                creator: this.address,
                mood: new_mood
            }
        };

        let result = await server.client.signAndBroadcast(this.address, [msgRemood], fee);
        assertIsBroadcastTxSuccess(result);

        this.mood = new_mood;
        this.saveLocalInstance();
    }

    saveLocalInstance() {
        const identity = {
            name: this.name,
            mood: this.mood,
            mnemonic: this.mnemonic,
            address: this.address
        }

        localStorage.setItem('identity', JSON.stringify(identity));
    }

    /*
     * getAccounts()
     *
     * Use:
     *  const instance = new Instance();
     *  await instance.init();
     *  const [firstAccount] = await instance.getAccounts();
     */
    async getAccounts() {
        if (typeof this.wallet == 'undefined' ) {
            this.wallet = await this.getWallet();
        }

        return this.wallet.getAccounts();
    }


    async performPatent(compute_result, personalization, fee) {
       console.log("Patenting")
        let server = new Server();
        await server.init(await this.getWallet());

        const msgCreateSchematic = {
            typeUrl: "/di.MsgCreateSchematic",
            value: {
                creator: this.address,
                name:personalization.name,
                description:personalization.description,
                hash:compute_result.hash,
                input:compute_result.input,
                owner: this.address
            }
        };


        let result = await server.client.signAndBroadcast(this.address, [msgCreateSchematic], fee);
        console.log(result)
        //assertIsBroadcastTxSuccess(result);

        return result;

    }

    async performBuild(compute_result, personalization, fee) {
        let server = new Server();
        await server.init(await this.getWallet());

        console.log(compute_result)

        const msgCreateStructure = {
            typeUrl: "/di.MsgCreateStructure",
            value: {
                creator: this.address,
                name:personalization.name,
                description:personalization.description,
                hash:compute_result.hash,
                input:compute_result.input,
                schematic: compute_result.compute_process.program.schematic.hash,
                performingStructure: compute_result.compute_process.program.performing_structure.id,
                owner: this.address
            }
        };

        console.log(msgCreateStructure)

        let result = await server.client.signAndBroadcast(this.address, [msgCreateStructure], fee);
        console.log(result)

        //assertIsBroadcastTxSuccess(result);

        return result;

    }

    /*
     *
     */
    async queryBalance() {
      let server = new Server();
      await server.init(await this.getWallet());

      let balance_query_result = await server.client.getBalance(this.address, "watt")

      if (typeof balance_query_result == 'undefined' || balance_query_result == null){
        balance_query_result = {amount: 0, denom:'watt'}
      }

      return balance_query_result;
    }
}

