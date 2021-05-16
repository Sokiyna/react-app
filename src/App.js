import './App.css';
import React from 'react';
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Main from "./componants/Main";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>

      </div>
    )
  }
}

export default App;