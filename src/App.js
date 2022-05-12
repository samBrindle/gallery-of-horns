import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast.js';
// import '.App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      selectedBeast: {},
    }
  }

  openModalHandler = (name) => {
    let foundBeast = data.find(beast => {
      return beast.title === name;
    })

    this.setState({
      isModalDisplaying: true,
      selectedBeast: foundBeast,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalDisplaying: false
    })
  }

  render() {
    return (
      <>
        <Header />

        <Main
          data={data}
          openModalHandler={this.openModalHandler}
        />

        <Footer />

        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          isModalDisplaying={this.state.isModalDisplaying}
          closeModalHandler={this.closeModalHandler}
        />

        {/* <Modal
          show={this.state.isModalDisplaying}
          onHide={this.closeModalHandler}
        >
          <Modal.Title>{this.state.beastName} is a beast.</Modal.Title>
          <Modal.Image>

          </Modal.Image>
        </Modal> */}
      </>
    );
  }
}
export default App;