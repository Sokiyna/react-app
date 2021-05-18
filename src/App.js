import './App.css';
import React from 'react';
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Main from "./componants/Main";
import dataArr from "./componants/data.json";

import SelectedBeast from "./componants/SelectedBeast";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArr: this.props.dataArr,
      storedElelments: {},
      show: false,

    };
  }

  handleEnd = () => {
    this.setState({
      show: false,
    });
  }

  showHandle = (params) => {
    let outcome = dataArr.find(element => {
      if (element.title === params) {
        return element;
      }

    });
    this.setState({
      storedElelments: outcome,
      show: true,
    });
  }




  render() {
    return (
      <div>
        <Header />
        <Main dataArr={dataArr} showHandle={this.showHandle} />
        <SelectedBeast show={this.state.show} handleEnd={this.handleEnd} element={this.state.storedElelments}/>
        <Footer />

      </div>
    )
  }
}

export default App;