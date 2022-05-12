import React from 'react';
import Card from 'react-bootstrap/Card'
import './HornedBeast.css';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favs: 0,
        }
    }

    favoriteImg = () => {
        this.setState({
            favs: this.state.favs + 1
        })
    }

    handleImgClick = () => {
        this.props.openModalHandler(this.props.title);
    }

    render () {
        return (

        <Card style={{ width: '18rem' }} id='card'>
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img
                src={this.props.imageURL}
                alt={this.props.title}
                title={this.props.title}
                onClick={this.handleImgClick}
            >
            </Card.Img>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Card.Text onClick={this.favoriteImg}> ❤️ {this.state.favs} Favorite this!</Card.Text>
        </Card.Body>
        </Card>

            // <article>
            //     <h3>{this.props.title}</h3>
            //     <p>{this.state.favs} ❤️</p>
            //     <p className='favoriteButton' onClick={this.favoriteImg}>Favorite this!</p>
            //     <img 
            //         src={this.props.imageURL}
            //         alt={this.props.title}
            //         title={this.props.title}
            //     />
            //     <p>{this.props.description}</p>
            // </article>
        )
    }
}

export default HornedBeast;