import React from 'react';

// const iterateArr = (arr) => {
//     arr.forEach( (beast) => {
//         <h2>{this.prop.title}</h2>
//     })
// }

class HornedBeast extends React.Component {
    render () {
        return (
            <article>
                <h3>{this.props.title}</h3>
                <img 
                    src={this.props.imageURL}
                    alt={this.props.title}
                    title={this.props.title}
                />
                <p>{this.props.description}</p>
            </article>
        )
    }
}

export default HornedBeast;