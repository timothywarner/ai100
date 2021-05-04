import { IRestResponse } from "../common.browser/Exports";
import { IAudioSource } from "../common/Exports";
import { SpeakerIdentificationModel, SpeakerVerificationModel, VoiceProfile, VoiceProfileType } from "../sdk/Exports";
import { SpeakerRecognitionConfig } from "./Exports";
/**
 * Implements methods for speaker recognition classes, sending requests to endpoint
 * and parsing response into expected format
 * @class SpeakerIdMessageAdapter
 */
export declare class SpeakerIdMessageAdapter {
    private privRestAdapter;
    private privUri;
    constructor(config: SpeakerRecognitionConfig);
    /**
     * Sends create profile request to endpoint.
     * @function
     * @param {VoiceProfileType} profileType - type of voice profile to create.
     * @param {string} lang - language/locale of voice profile
     * @public
     * @returns {Promise<IRestResponse>} promised rest response containing id of created profile.
     */
    createProfile(profileType: VoiceProfileType, lang: string): Promise<IRestResponse>;
    /**
     * Sends create enrollment request to endpoint.
     * @function
     * @param {VoiceProfile} profileType - voice profile for which to create new enrollment.
     * @param {IAudioSource} audioSource - audioSource from which to pull data to send
     * @public
     * @returns {Promise<IRestResponse>} rest response to enrollment request.
     */
    createEnrollment(profile: VoiceProfile, audioSource: IAudioSource): Promise<IRestResponse>;
    /**
     * Sends verification request to endpoint.
     * @function
     * @param {SpeakerVerificationModel} model - voice model to verify against.
     * @param {IAudioSource} audioSource - audioSource from which to pull data to send
     * @public
     * @returns {Promise<IRestResponse>} rest response to enrollment request.
     */
    verifySpeaker(model: SpeakerVerificationModel, audioSource: IAudioSource): Promise<IRestResponse>;
    /**
     * Sends identification request to endpoint.
     * @function
     * @param {SpeakerIdentificationModel} model - voice profiles against which to identify.
     * @param {IAudioSource} audioSource - audioSource from which to pull data to send
     * @public
     * @returns {Promise<IRestResponse>} rest response to enrollment request.
     */
    identifySpeaker(model: SpeakerIdentificationModel, audioSource: IAudioSource): Promise<IRestResponse>;
    /**
     * Sends delete profile request to endpoint.
     * @function
     * @param {VoiceProfile} profile - voice profile to delete.
     * @public
     * @returns {Promise<IRestResponse>} rest response to deletion request
     */
    deleteProfile(profile: VoiceProfile): Promise<IRestResponse>;
    /**
     * Sends reset profile request to endpoint.
     * @function
     * @param {VoiceProfile} profile - voice profile to reset enrollments for.
     * @public
     * @returns {Promise<IRestResponse>} rest response to reset request
     */
    resetProfile(profile: VoiceProfile): Promise<IRestResponse>;
    private getOperationUri;
}
