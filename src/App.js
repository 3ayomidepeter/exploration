import React from 'react';
import Nav from './components/nav'
import Card from './components/card'
import data from './data'
// import image from ''


const App = () => {
    const displayData = data.map(datum => {
        return <Card
            key={datum.location}
            datum={datum}
        />
    })
    return (

        <div>

            <Nav />
            {displayData}

        </div>
    )
}

export default App;

