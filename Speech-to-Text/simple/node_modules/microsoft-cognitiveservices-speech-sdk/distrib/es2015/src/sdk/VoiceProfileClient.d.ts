import { AudioConfig } from "./Audio/AudioConfig";
import { PropertyCollection, VoiceProfile, VoiceProfileEnrollmentResult, VoiceProfileResult, VoiceProfileType } from "./Exports";
import { SpeechConfig } from "./SpeechConfig";
/**
 * Defines VoiceProfileClient class for Speaker Recognition
 * Handles operations from user for Voice Profile operations (e.g. createProfile, deleteProfile)
 * @class VoiceProfileClient
 */
export declare class VoiceProfileClient {
    protected privProperties: PropertyCollection;
    private privAdapter;
    /**
     * Gets the authorization token used to communicate with the service.
     * @member VoiceProfileClient.prototype.authorizationToken
     * @function
     * @public
     * @returns {string} Authorization token.
     */
    get authorizationToken(): string;
    /**
     * Gets/Sets the authorization token used to communicate with the service.
     * @member VoiceProfileClient.prototype.authorizationToken
     * @function
     * @public
     * @param {string} token - Authorization token.
     */
    set authorizationToken(token: string);
    /**
     * The collection of properties and their values defined for this VoiceProfileClient.
     * @member VoiceProfileClient.prototype.properties
     * @function
     * @public
     * @returns {PropertyCollection} The collection of properties and their values defined for this VoiceProfileClient.
     */
    get properties(): PropertyCollection;
    /**
     * VoiceProfileClient constructor.
     * @constructor
     * @param {SpeechConfig} speechConfig - An set of initial properties for this synthesizer (authentication key, region, &c)
     */
    constructor(speechConfig: SpeechConfig);
    /**
     * Create a speaker recognition voice profile
     * @member VoiceProfileClient.prototype.createProfileAsync
     * @function
     * @public
     * @param {VoiceProfileType} profileType Type of Voice Profile to be created
     *        specifies the keyword to be recognized.
     * @param {string} lang Language string (locale) for Voice Profile
     * @param cb - Callback invoked once Voice Profile has been created.
     * @param err - Callback invoked in case of an error.
     */
    createProfileAsync(profileType: VoiceProfileType, lang: string, cb?: (e: VoiceProfile) => void, err?: (e: string) => void): void;
    /**
     * Create a speaker recognition voice profile
     * @member VoiceProfileClient.prototype.enrollProfileAsync
     * @function
     * @public
     * @param {VoiceProfile} profile Voice Profile to create enrollment for
     * @param {AudioConfig} audioConfig source info from which to create enrollment
     * @param cb - Callback invoked once Enrollment request has been submitted.
     * @param err - Callback invoked in case of an error.
     */
    enrollProfileAsync(profile: VoiceProfile, audioConfig: AudioConfig, cb?: (e: VoiceProfileEnrollmentResult) => void, err?: (e: string) => void): void;
    /**
     * Delete a speaker recognition voice profile
     * @member VoiceProfileClient.prototype.deleteProfileAsync
     * @function
     * @public
     * @param {VoiceProfile} profile Voice Profile to be deleted
     * @param cb - Callback invoked once Voice Profile has been deleted.
     * @param err - Callback invoked in case of an error.
     */
    deleteProfileAsync(profile: VoiceProfile, cb?: (response: VoiceProfileResult) => void, err?: (e: string) => void): void;
    /**
     * Remove all enrollments for a speaker recognition voice profile
     * @member VoiceProfileClient.prototype.resetProfileAsync
     * @function
     * @public
     * @param {VoiceProfile} profile Voice Profile to be reset
     * @param cb - Callback invoked once Voice Profile has been reset.
     * @param err - Callback invoked in case of an error.
     */
    resetProfileAsync(profile: VoiceProfile, cb?: (response: VoiceProfileResult) => void, err?: (e: string) => void): void;
    /**
     * Included for compatibility
     * @member VoiceProfileClient.prototype.close
     * @function
     * @public
     */
    close(): void;
    protected implClientSetup(): void;
    private getResult;
}
