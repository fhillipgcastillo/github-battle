import React from "react";
import { Link } from "react-router-dom";
import PlayerPreview from "../components/PlayerPreview";
import { PlayerInput } from "../components/PlayerInput";

export default class Battle extends React.Component {
  state = {
    playerOneName: "",
    playerTwoName: "",
    playerOneImage: null,
    playerTwoImage: null,
  };
  handleSubmit = (id, username) => {
    this.setState(function () {
      let newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] =
        "https://github.com/" + username + ".png?size=200";
      return newState;
    });
  };
  handleReset = (id) => {
    this.setState(function () {
      let newState = {};
      newState[id + "Name"] = "";
      newState[id + "Image"] = null;
      return newState;
    });
  };
  render() {
    let playerOneName = this.state.playerOneName,
      playerTwoName = this.state.playerTwoName,
      playerOneImage = this.state.playerOneImage,
      playerTwoImage = this.state.playerTwoImage,
      match = this.props.match;

    return (
      <div>
        <div className="row">
          {!playerOneName && (
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />
          )}
          {playerOneImage !== null && (
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              <button
                className="reset"
                onClick={this.handleReset.bind(null, "playerOne")}
              >
                Reset
              </button>
            </PlayerPreview>
          )}
          {!playerTwoName && (
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />
          )}
          {playerTwoImage !== null && (
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              <button
                className="reset"
                onClick={this.handleReset.bind(null, "playerTwo")}
              >
                Reset
              </button>
            </PlayerPreview>
          )}
        </div>
        {playerOneImage && playerTwoImage && (
          <Link
            className="button"
            to={{
              pathname: match.url + "/results",
              search:
                `?playerOneName=` +
                playerOneName +
                "&playerTwoName=" +
                playerTwoName,
            }}
          >
            Battle
          </Link>
        )}
      </div>
    );
  }
}
