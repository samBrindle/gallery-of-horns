import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filteredBeasts: this.props.data
        }
    }
    
      handleSelect = (event) => {
        let selected = parseInt(event.target.value);
        let allBeasts = this.props.data;
        
        // new way thanks to Justin
        if(selected === 4) {
            let newBeastList = allBeasts.filter( (beast) => beast.horns > 3);
            this.setState({filteredBeasts: newBeastList});
        } else if (selected) {
            allBeasts.filter( (beast) => beast.horns === selected);
            let newBeastList = allBeasts.filter( (beast) => beast.horns === selected);
            this.setState({filteredBeasts: newBeastList});
        } else {
            this.setState({filteredBeasts: allBeasts});
        }
    
        // *** OLD WAY ***
        // if(selected === '1') {
        //   let newData = this.props.data.filter( (horn) => horn.horns === 1);
        //   this.setState({filteredBeasts: newData});
        // } else if(selected === '2') {
        //   let newData = this.props.data.filter( (horn) => horn.horns === 2);
        //   this.setState({filteredBeasts: newData});
        // } else if(selected === '3') {
        //   let newData = this.props.data.filter( (horn) => horn.horns === 3);
        //   this.setState({filteredBeasts: newData});
        // } else if(selected === '4') {
        //   let newData = this.props.data.filter( (horn) => horn.horns > 3);
        //   this.setState({filteredBeasts: newData});
        // } else {
        //   this.setState({filteredBeasts: this.props.data})
        // }
      }
    
    render() {


        let beasts = this.state.filteredBeasts.map( (beast, idx) => {
           return(
            <HornedBeast 
                title={beast.title}
                imageURL={beast.image_url}
                description={beast.description}
                key = {idx}
                openModalHandler={this.props.openModalHandler}
            />)
        });


        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Number of Horns</Form.Label>
                    <Form.Group>
                        <Form.Select
                            name="selected"
                            onChange={this.handleSelect}
                        >
                            <option>All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">More than 3</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                <main>
                    {beasts}
                </main>
            </>
        )
    }
}

export default Main;