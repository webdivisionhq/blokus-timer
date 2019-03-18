import React from "react";
import Button from "./Button";
import { GoSettings } from "react-icons/go";
import css from "./Settings.module.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: "two",
      input: "10"
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.input, this.state.userCount);
  };

  handleUserCountChange = event => {
    this.setState({
      userCount: event.target.value
    });
  };

  handleTimeChange = event => {
    this.setState({
      input: this.refs.input.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={css.settings}>
          <header className={css.header}>
            <h1>Settings</h1>
            <GoSettings className={css.icon} size={40} />
          </header>
          <main>
            <label>
              MAX TIME
              <input
                ref="input"
                className={css["max-time-input"]}
                onChange={this.handleTimeChange}
              />
            </label>
            <div className='users'>
            USERS COUNT
                <label>
                    <input
                        type="radio"
                        name="users_count"
                        value="two"
                        checked={this.state.userCount === "two"}
                        onChange={this.handleUserCountChange}
                    />
                    2
                </label>
                <label>
                    <input
                        type="radio"
                        name="users_count"
                        value="four"
                        checked={this.state.userCount === "four"}
                        onChange={this.handleUserCountChange}
                    />
                    4
                </label>
            </div>
          </main>
          <footer className={css.footer}>
            <Button type="button" onClick={this.props.onCancel} className="foo">
              CANCEL
            </Button>
            <Button variant="cta">SAVE</Button>
          </footer>
        </div>
      </form>
    );
  }
}

export default Settings;
