import {JsonAjaxer} from "../vendor/JsonAjaxer";
import {StructureFactory} from "../models/StructureFactory";
import {SchematicFactory} from "../models/SchematicFactory";
import {InstanceFactory} from "../models/InstanceFactory";

/**
 * API Gateway for the Droid API
 */
export class DroidApi {

  /**
   * @param {string} scheme example https://
   * @param {string} domain example coindroids.com
   * @param {Object} ajax AJAX handling class
   */
  constructor(scheme, domain, ajax = null) {
    this.scheme = scheme;
    this.domain = domain;
    this.ajax = (ajax !== null) ? ajax: new JsonAjaxer();
  }

  /**
   * @param data response data
   * @returns {Array.<Structure>}
   */
  structureResponseHandler(data) {
    const structureFactory = new StructureFactory();
    const structures = [];
    const rawStructures = Array.isArray(data.Structure) ? data.Structure : [data.Structure];

    for (let i = 0; i < rawStructures.length; i ++) {
      structures[i] = structureFactory.make(rawStructures[i]);
    }

    return structures;
  }

  /**
   * @returns {Promise<Structure[]>}
   */
  getStructures() {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param {string} creator id
   * @returns {Promise<Structure[]>}
   */
  getStructuresByCreator(creator) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/creator/${creator}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param {string} structureId id
   * @returns {Promise<Structure[]>}
   */
  getSingleStructure(structureId) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/${structureId}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param searchString
   * @returns {Promise<Structure[]>}
   */
  searchStructures(searchString) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/search/${encodeURIComponent(searchString)}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param data response data
   * @returns {Schematic[]}
   */
  schematicResponseHandler(data) {
    const schematicFactory = new SchematicFactory();
    const schematics = [];
    const rawSchematics = Array.isArray(data.Schematic) ? data.Schematic : [data.Schematic];

    for (let i = 0; i < rawSchematics.length; i ++) {
      schematics[i] = schematicFactory.make(rawSchematics[i]);
    }

    return schematics;
  }

  /**
   * @param {string} creator id
   * @returns {Promise<Schematic[]>}
   */
  getSchematicsByCreator(creator) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Schematic/creator/${creator}`)
      .then(this.schematicResponseHandler.bind(this));
  }

  /**
   * @param searchString
   * @returns {Promise<Schematic[]>}
   */
  searchSchematics(searchString) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Schematic/search/${encodeURIComponent(searchString)}`)
      .then(this.schematicResponseHandler.bind(this));
  }

  /**
   * @param {string} structureId
   * @param {string} searchString
   * @returns {Promise<Schematic[]>}
   */
  searchSchematicsByStructure(structureId, searchString) {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Schematic/search/${structureId}/${encodeURIComponent(searchString)}`)
      .then(this.schematicResponseHandler.bind(this));
  }

  /**
   * @param {string} schematicId
   * @param {string} searchString
   * @returns {Promise<Structure[]>}
   */
  searchStructuresBySchematic(schematicId, searchString, creator) {
    // TODO: Add real endpoint call once created
    const searchWithCreator = `${searchString} ${creator} engineering`;
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/search/${encodeURIComponent(searchWithCreator)}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param {string} actionType
   * @param {string} target
   * @param {string} supervisor
   * @param {string} searchString
   * @returns {Promise<Structure[]>}
   */
  searchStructuresByPerforming(actionType, target, supervisor, searchString) {
    const searchWithCreator = `${searchString}`;
    ///di/Structure/search/performing/{action_type}/{target}/{instance}/{query}
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/search/performing/${encodeURIComponent(actionType)}/${encodeURIComponent(target)}/${encodeURIComponent(supervisor)}/${encodeURIComponent(searchWithCreator)}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param {string} actionType
   * @param {string} performing
   * @param {string} searchString
   * @returns {Promise<Structure[]>}
   */
  searchStructuresByTargeting(actionType, performing, searchString) {
    const searchWithCreator = `${searchString}`;
    ///di/Structure/search/targeting/{action_type}/{performing}/{query}
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/search/targeting/${encodeURIComponent(actionType)}/${encodeURIComponent(performing)}/${encodeURIComponent(searchWithCreator)}`)
      .then(this.structureResponseHandler.bind(this));
  }

  /**
   * @param {object} request
   * @returns {Promise<string>}
   */
  performFaucetRequest(request) {
    return this.ajax.post(`${this.scheme}${this.domain}/faucet/`, request)
      .then( this.faucetRequestResponseHandler );
  }

  faucetRequestResponseHandler(response) {
    return response.transfers[0].coin;

  }

  /**
   * @returns {Promise<Instance[]>}
   */
  getInstancesByAWUM() {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/awum`)
      .then(this.instanceResponseHandler.bind(this));
  }

  /**
   * @param data response data
   * @returns {Instance[]}
   */
  instanceResponseHandler(data) {
    const instanceFactory = new InstanceFactory();

    let instances = [];
    const rawInstances = Array.isArray(data.watt_under_management) ? data.watt_under_management : [data.watt_under_management];

    for (let i = 0; i < rawInstances.length; i ++) {
      instances[i] = instanceFactory.make(rawInstances[i])
    }

    instances.sort(function(a, b) {
      if (a.wattUnderManagement > b.wattUnderManagement) {
        return -1;
      }
      if (a.wattUnderManagement < b.wattUnderManagement) {
        return 1;
      }
      // names must be equal
      return 0;
    })

    return instances;
  }

  /**
   * @returns {Promise<Structure[]>}
   */
  getTopTenStructures() {
    return this.ajax.get(`${this.scheme}${this.domain}/api/di/Structure/search/`)
      .then(this.topTenStructureResponseHandler.bind(this));
  }

  /**
   * @param data response data
   * @returns {Structure[]}
   */
  topTenStructureResponseHandler(data) {
    const structureFactory = new StructureFactory();

    let structures = [];
    const rawStructures = Array.isArray(data.Structure) ? data.Structure: [data.Structure];

    for (let i = 0; i < rawStructures.length; i ++) {
      structures[i] = structureFactory.make(rawStructures[i])
    }

    structures.sort(function(a, b) {
      if (parseInt(a.battery.amount) > parseInt(b.battery.amount)) {
        return -1;
      }
      if (parseInt(a.battery.amount) < parseInt(b.battery.amount)) {
        return 1;
      }
      // names must be equal
      return 0;
    })

    return structures.slice(0,10);
  }

  /**
   * @returns {Promise<Instance[]>}
   */
  getWattTotal() {
    return this.ajax.get(`${this.scheme}${this.domain}/api/cosmos/bank/v1beta1/supply`)
      .then(this.wattTotalResponseHandler.bind(this));
  }

  /**
   * @param data response data
   * @returns {object}
   */
  wattTotalResponseHandler(data) {

    const stake = parseInt(data.supply[0].amount)
    const watt = parseInt(data.supply[1].amount)
    const total = stake + watt

    const result = {
      "denom": "watt",
      "amount": total
    }

    return result;
  }

}
