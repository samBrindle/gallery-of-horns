import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

let beasts = []

data.forEach( (beast, idx) => {
    beasts.push(<HornedBeast 
        title={beast.title}
        imageURL={beast.image_url}
        description={beast.description}
        key = {idx}
    />)
})


class Main extends React.Component {
    render() {
        return (
            <main>
                {beasts}
            </main>
        )
    }
}

export default Main;