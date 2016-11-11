import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>Search Article</h1>
      <div className="col-sm-12">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Articles"
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>


        </form>
      </div>
    </div>
    );
  }
}

export default App;
