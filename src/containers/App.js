import React, { Component } from "react";
import { connect } from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

import { setSearchField, requestRobots } from '../action';


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !isPending ? (
      <h1 className="tc f1"> Loading...</h1>
    ) : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
