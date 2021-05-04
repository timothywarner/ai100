// Audio must be .wav, 16-bit, mono, 16 kHz

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

(function() {
  // <code>
  "use strict";

  // pull in the required packages.
  const sdk = require("microsoft-cognitiveservices-speech-sdk");
  const fs = require("fs");

  // replace with your own subscription key,
  // service region (e.g., "westus"), and
  // the name of the file you want to run
  // through the speech recognizer.
  const subscriptionKey = "59483c5af29e4864a726f82cf1675cd6";
  const serviceRegion = "eastus"; // e.g., "westus"
  const filename = "tim-audio.wav"; // 16000 Hz, Mono

  // create the push stream we need for the speech sdk.
  const pushStream = sdk.AudioInputStream.createPushStream();

  // open the file and push it to the push stream.
  fs.createReadStream(filename).on('data', function(arrayBuffer) {
    pushStream.write(arrayBuffer.slice());
  }).on('end', function() {
    pushStream.close();
  });

  // we are done with the setup
  console.log("Now recognizing from: " + filename);

  // now create the audio-config pointing to our stream and
  // the speech config specifying the language.
  const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
  const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

  // setting the recognition language to English.
  speechConfig.speechRecognitionLanguage = "en-US";

  // create the speech recognizer.
  const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  // start the recognizer and wait for a result.
  recognizer.recognizeOnceAsync(
    function (result) {
      console.log(result);

      recognizer.close();
      recognizer = undefined;
    },
    function (err) {
      console.trace("err - " + err);

      recognizer.close();
      recognizer = undefined;
    });
  // </code>

}());
