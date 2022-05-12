import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

// Justin Hammerly helped me!

class SelectedBeast extends React.Component {
    render () {
        return (

        <Modal
            show={this.props.isModalDisplaying}
            onHide={this.props.closeModalHandler}
        >
            <Modal.Body>
                <Card style={{ width: '18rem' }} id='card'>
                <Card.Body>
                    <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                    <Card.Img
                        src={this.props.selectedBeast.image_url}
                        alt={this.props.selectedBeast.title}
                        title={this.props.selectedBeast.title}
                        // onClick={this.handleImgClick}
                    >
                    </Card.Img>
                    <Card.Text>
                    {this.props.selectedBeast.description}
                    </Card.Text>
                </Card.Body>
                </Card>

            </Modal.Body>
        </Modal>
        
        )
    }
}

export default SelectedBeast;