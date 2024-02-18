import { Component } from "react";
import "./RightSideBarStyles.css";
// import {Link} from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
class RightSideBar extends Component {
  render() {
    return (
      <>
        <div id="RightSideBar">
          <Dropdown/>
          {/* <select id="videoDropdown" className="dropdown">
            <option value="">
              <ul>
                <li>
                  <a href="#market- trends">Market Trends</a>
                </li>
                <li>
                  <a href="#expert-analysis">Expert Analysis </a>
                </li>
                <li>
                  <a href="#event-calendar">Event Calendar</a>
                </li>
              </ul>
            </option>
          </select> */}
          {/* <nav class="dropdown">
            <button class="main- item"></button>{" "}
            <ul>
              <li>
                <a href="#market- trends">Market Trends</a>
              </li>
              <li>
                <a href="#expert-analysis">Expert Analysis </a>
              </li>
              <li>
                <a href="#event-calendar">Event Calendar</a>
              </li>
            </ul>
          </nav> */}
        </div>
      </>
    );
  }
}

export default RightSideBar;
