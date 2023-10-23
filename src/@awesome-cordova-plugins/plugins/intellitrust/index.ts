/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

/**
 * @name Intellitrust
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Intellitrust } from '@awesome-cordova-plugins/intellitrust';
 *
 *
 * constructor(private intellitrust: Intellitrust) { }
 *
 * ...
 *
 *
 * this.intellitrust.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */

// type createNewSoftTokenIdentityParams = {
//   serialNumber: string,
//   activationCode: string,
//   deviceId: string,
//   fileName: string
// }

// type Identity = {
//   identityId: string;
//   deviceId: string;
//   serialNumber: string;
//   seed: string;
//   registrationCode: string;
//   registeredForTransactions: boolean;
//   registeredForNotifications: boolean;
//   pinRequired: boolean;
//   allowFaceRecognition: boolean;
//   faceRecognitionLicenseAvailable: boolean;
//   otpLength: number;
//   registeredForOnlineTransactions: boolean;
//   registeredForOfflineTransactions: boolean;
//   allowUnsecuredDevice: boolean;
// }
@Plugin({
  pluginName: 'Intellitrust',
  plugin: 'intellitrust', // npm package name, example: cordova-plugin-camera
  pluginRef: '', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/BelizeBankLimited/intellitrust', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class Intellitrust extends AwesomeCordovaNativePlugin {
  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  createNewSoftTokenIdentity(args: any): Promise<any> {
    return;
  }
  deleteIdentity(args: any): Promise<any> {
    return;
  }
  getOTP(args: any): Promise<any> {
    return;
  }
  parseNotification(args: any): Promise<any> {
    return;
  }
}
