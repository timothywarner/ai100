// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
/**
 * Defines the possible reasons a recognition result might be generated.
 * @class ResultReason
 */
export var ResultReason;
(function (ResultReason) {
    /**
     * Indicates speech could not be recognized. More details
     * can be found in the NoMatchDetails object.
     * @member ResultReason.NoMatch
     */
    ResultReason[ResultReason["NoMatch"] = 0] = "NoMatch";
    /**
     * Indicates that the recognition was canceled. More details
     * can be found using the CancellationDetails object.
     * @member ResultReason.Canceled
     */
    ResultReason[ResultReason["Canceled"] = 1] = "Canceled";
    /**
     * Indicates the speech result contains hypothesis text.
     * @member ResultReason.RecognizedSpeech
     */
    ResultReason[ResultReason["RecognizingSpeech"] = 2] = "RecognizingSpeech";
    /**
     * Indicates the speech result contains final text that has been recognized.
     * Speech Recognition is now complete for this phrase.
     * @member ResultReason.RecognizedSpeech
     */
    ResultReason[ResultReason["RecognizedSpeech"] = 3] = "RecognizedSpeech";
    /**
     * Indicates the intent result contains hypothesis text and intent.
     * @member ResultReason.RecognizingIntent
     */
    ResultReason[ResultReason["RecognizingIntent"] = 4] = "RecognizingIntent";
    /**
     * Indicates the intent result contains final text and intent.
     * Speech Recognition and Intent determination are now complete for this phrase.
     * @member ResultReason.RecognizedIntent
     */
    ResultReason[ResultReason["RecognizedIntent"] = 5] = "RecognizedIntent";
    /**
     * Indicates the translation result contains hypothesis text and its translation(s).
     * @member ResultReason.TranslatingSpeech
     */
    ResultReason[ResultReason["TranslatingSpeech"] = 6] = "TranslatingSpeech";
    /**
     * Indicates the translation result contains final text and corresponding translation(s).
     * Speech Recognition and Translation are now complete for this phrase.
     * @member ResultReason.TranslatedSpeech
     */
    ResultReason[ResultReason["TranslatedSpeech"] = 7] = "TranslatedSpeech";
    /**
     * Indicates the synthesized audio result contains a non-zero amount of audio data
     * @member ResultReason.SynthesizingAudio
     */
    ResultReason[ResultReason["SynthesizingAudio"] = 8] = "SynthesizingAudio";
    /**
     * Indicates the synthesized audio is now complete for this phrase.
     * @member ResultReason.SynthesizingAudioCompleted
     */
    ResultReason[ResultReason["SynthesizingAudioCompleted"] = 9] = "SynthesizingAudioCompleted";
    /**
     * Indicates the speech synthesis is now started
     * @member ResultReason.SynthesizingAudioStarted
     */
    ResultReason[ResultReason["SynthesizingAudioStarted"] = 10] = "SynthesizingAudioStarted";
    /**
     * Indicates the voice profile is being enrolled and customers need to send more audio to create a voice profile.
     * @member ResultReason.EnrollingVoiceProfile
     */
    ResultReason[ResultReason["EnrollingVoiceProfile"] = 11] = "EnrollingVoiceProfile";
    /**
     * Indicates the voice profile has been enrolled.
     * @member ResultReason.EnrolledVoiceProfile
     */
    ResultReason[ResultReason["EnrolledVoiceProfile"] = 12] = "EnrolledVoiceProfile";
    /**
     * Indicates successful identification of some speakers.
     * @member ResultReason.RecognizedSpeakers
     */
    ResultReason[ResultReason["RecognizedSpeakers"] = 13] = "RecognizedSpeakers";
    /**
     * Indicates successfully verified one speaker.
     * @member ResultReason.RecognizedSpeaker
     */
    ResultReason[ResultReason["RecognizedSpeaker"] = 14] = "RecognizedSpeaker";
    /**
     * Indicates a voice profile has been reset successfully.
     * @member ResultReason.ResetVoiceProfile
     */
    ResultReason[ResultReason["ResetVoiceProfile"] = 15] = "ResetVoiceProfile";
    /**
     * Indicates a voice profile has been deleted successfully.
     * @member ResultReason.DeletedVoiceProfile
     */
    ResultReason[ResultReason["DeletedVoiceProfile"] = 16] = "DeletedVoiceProfile";
})(ResultReason || (ResultReason = {}));

//# sourceMappingURL=ResultReason.js.map
