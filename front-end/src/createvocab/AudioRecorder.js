import MicRecorder from "mic-recorder-to-mp3";
import React from "react";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class AudioRecorder extends React.Component {
  constructor(props) {
    super(props);
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    this.state = {
      isRecording: false,
      isPaused: false,
      blobURL: "",
      isBlocked: false,
    };
  }

  startRecording = () => {
    if (this.state.isBlocked) {
      console.log("Please give permission for the microphone to record audio.");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };
  sendAudioFile = (blob) => {
    const form = new FormData();
    form.append("audio", blob);
    const payLoad = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: form,
    };

    fetch("http://localhost:3000/items", payLoad)
      .then((r) => r.json())
      .then((newCardObj) => {
        console.log(newCardObj);
      });
  };
  stopRecording = () => {
    this.setState({ isRecording: false });
    Mp3Recorder.stop()
      .getMp3()
      .then(async ([buffer, blob]) => {
        console.log(blob);
        this.sendAudioFile(blob);
        const blobURL = URL.createObjectURL(blob);
        this.sendAudioFile(blobURL);
        this.setState({
          blobURL: blobURL,
          isRecording: false,
        });
      })
      .catch((e) => console.log(e));
  };

  checkPermissionForAudio = () => {
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }
    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function (constraints) {
        // First get ahold of the legacy getUserMedia, if present
        var getUserMedia =
          // navigator.getUserMedia ||
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
          return Promise.reject(
            new Error("getUserMedia is not implemented in this browser")
          );
        }

        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise(function (resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.setState({ isBlocked: false });
      })
      .catch((err) => {
        this.setState({ isBlocked: true });
        console.log(
          "Please give permission for the microphone to record audio."
        );
        console.log(err.name + ": " + err.message);
      });
  };

  componentDidMount() {
    this.checkPermissionForAudio();
  }

  render() {
    const { isRecording } = this.state;
    return (
      <React.Fragment>
        <button
          onClick={this.startRecording}
          className="mr-3 add-collec-btn"
          disabled={isRecording}
        >
          Record
        </button>
        <button
          onClick={this.stopRecording}
          className="mr-3 delete-btn"
          disabled={!isRecording}
        >
          Stop
        </button>
        <audio
          ref="audioSource"
          controls="controls"
          src={this.state.blobURL || ""}
        />
      </React.Fragment>
    );
  }
}

export default AudioRecorder;
