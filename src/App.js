import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      selectedBeast: {},
      howToSort: '',
    }
  }

  // handlSubmit = (event) => {
  //   event.preventDefault();

  //   this.setState({
  //     howToSort: event.target.selected.value
  //   })
  // }

  // handleSelect = (event) => {
  //   let selected = event.target.value;

  //   if(selected === '1') {
  //     let newData = data.filter( (horn) => horn.horns === 1);
  //     this.setState({data: newData});
  //   } else if(selected === '2') {
  //     let newData = data.filter( (horn) => horn.horns === 2);
  //     this.setState({data: newData});
  //   } else if(selected === '3') {
  //     let newData = data.filter( (horn) => horn.horns === 3);
  //     this.setState({data: newData});
  //   } else if(selected === 'More than 3') {
  //     let newData = data.filter( (horn) => horn.horns > 3);
  //     this.setState({data: newData});
  //   } else {
  //     this.setState({data: data})
  //   }
  // }

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
      </>
    );
  }
}
export default App;