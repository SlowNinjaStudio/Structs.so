import {Instance} from "../../models/Instance";
import {StringToFile} from "../../vendor/StringToFile";

export class DroidUIDroid {
  /**
   *
   * @param {Droid} droid
   * @param {string} idPrefix
   */
  constructor(droid, idPrefix = '') {
    this.droid = droid;
    this.idPrefix = idPrefix;

    this.instance;

    this.updater = setTimeout(async function updateTime() {
      this.instance = new Instance();
      await this.instance.init();
      // document.getElementById('droid_panel_name').innerHTML = this.instance.name;
      // document.getElementById('droid_panel_mood').innerHTML = this.instance.mood;
      document.getElementById('droid_panel_battery').innerHTML = ((await this.instance.queryBalance()).amount) + 'watt';

      // Create the download link on the fly so that the mnemonic isn't crawl-able.
      const mnemonic = this.instance.mnemonic;
      const seedPhraseFileName = this.getSeedPhraseFileName();
      document.getElementById('save-account-btn').addEventListener('click', function() {
        const element = document.createElement('a');
        element.setAttribute('href', StringToFile.convert(mnemonic));
        element.setAttribute('download', seedPhraseFileName);
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      });

      this.updater = setTimeout(updateTime, 120000);
    }.bind(this), 10);

  }

  getCanvasId() {
    return `${this.idPrefix}droid`;
  }

  getSeedPhraseFileName() {
    return StringToFile.makeFileNameFromId(
      this.droid.hash,
      '.txt',
      'seed-phrase-',
      32
    );
  }

  render() {
    return `
      <div class="droid container p-2">
        <div class="row mb-5">
          <div class="col text-center">
            <div class="game-asset-wrapper">
              <canvas id="${this.getCanvasId()}" class="pixel-art-viewer" width="64" height="64">
                Your browser does not support the canvas element.
              </canvas>
            </div>
          </div>
        </div>
        <div class="row account-menu-section">
          <div class="col nes-container with-title">
            <h3 class="title">Details</h3>
            <div class="droid-details">
<!--             <div class="row">-->
<!--              <div class="col-auto droid-detail-label px-0">-->
<!--                Name:-->
<!--              </div>-->
<!--              <div class="col text-break px-1" id="droid_panel_name"></div>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--              <div class="col-auto droid-detail-label px-0">-->
<!--                Mood:-->
<!--              </div>-->
<!--              <div class="col text-break px-1" id="droid_panel_mood"></div>-->
<!--            </div>-->
             <div class="row droid-detail">
              <div class="col-auto droid-detail-label">
                <img src="img/icons/icon-battery-charge.png" alt="Battery"> Battery:
              </div>
              <div class="col text-break px-1" id="droid_panel_battery"></div>
            </div>
            <div class="row">
              <div class="col">
               <a href="javascript: void(0)" class="nes-btn nes-btn-fluid is-primary" onclick="navigator.clipboard.writeText('${this.droid.hash}')">Copy Droid ID</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row account-menu-section">
        <div class="col nes-container with-title">
          <h3 class="title">Save</h3>
          <div class="droid-details">
            <div class="row droid-detail">
              <div class="col">
                Save your account by downloading your seed phrase.
              </div>
            </div>
            <div class="row">
              <div class="col">
                <a
                  id="save-account-btn"
                  href="javascript: void(0);"
                  class="nes-btn nes-btn-fluid is-primary"
                >Save Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
