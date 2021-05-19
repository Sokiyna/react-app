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
      dataArr:dataArr,
      storedElelments: {},
      show: false,

    };
  }

  handleEnd = () => {
    this.setState({
      show: false,
    });
  }

  showHandle = (params) =>{
    let outcome = dataArr.find(element => {
      if (element.title === params) {
        return element;
      }
      else{
        return ''
      }

    });
    this.setState({
      storedElelments: outcome,
      show: true,
    });
  }

  filterAnimals=(filterData)=>{
    this.setState({
      dataArr:filterData,
    });

  }


  render(){
    return (
      <div>
        <Header />
        <Main dataArr={this.state.dataArr} showHandle={this.showHandle} filterAnimals={this.filterAnimals} />
        <SelectedBeast show={this.state.show} handleEnd={this.handleEnd} element={this.state.storedElelments}/>
        <Footer />

      </div>
    )
  }
}



export default App;