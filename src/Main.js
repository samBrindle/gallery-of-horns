import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

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
                <article>
                    {beasts}
                </article>
            </main>
        )
    }
}

export default Main;