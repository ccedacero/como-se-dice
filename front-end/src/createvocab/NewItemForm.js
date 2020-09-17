import React from "react";
import AudioRecorder from "./AudioRecorder";
export default class NewItemForm extends React.Component {
  state = {
    image: {},
    audio: {},
  };

  onChange = (e) => {
    e.persist();
    this.setState(() => {
      return {
        [e.target.name]: e.target.files[0],
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("image", this.state.image);
    form.append("audio", this.state.audio);
    fetch(`http://localhost:3000/items`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      method: "POST",
      body: form,
    });
  };
  render() {
    return (
      <div>
        <div className="form">
          <h1>New Upload</h1>
          <form onSubmit={this.onSubmit}>
            <label>Image Upload</label>
            <input type="file" name="image" onChange={this.onChange} />
            <br />
            <label>Audio Upload</label>
            <input type="file" name="audio" onChange={this.onChange} />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
