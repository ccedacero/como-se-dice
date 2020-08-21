import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "@material-ui/icons/Mic";
const Dictaphone = (props) => {
  const [message, setMessage] = useState("");
  const commands = [
    {
      command: "spanish *",
      // callback: (food) => setMessage(`Your order is for: ${food}`),
      callback: (food) => props.translateEnglish(` ${food}`),
    },
    {
      command: "english *",
      callback: (food) => props.translateSpanish(` ${food}`),
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const start = () => {
    // props.handleBtnClick();
    SpeechRecognition.startListening();
  };

  return (
    <div>
      <MicIcon onClick={start} style={{ fontSize: "50px", color: "red" }} />
      {/* <button onClick={resetTranscript}>Reset</button> */}

      {/* <p>{message}</p> */}
      {/* <p>{transcript}</p> */}
    </div>
  );
};
export default Dictaphone;
