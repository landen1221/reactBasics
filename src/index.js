import React from 'react';
import ReactDOM from 'react-dom';
import food from './food';
import {choice, remove} from './helpers';


function App() {
    let randomFruit = choice(food)
    console.log(`I'd like one ${randomFruit} please!`)
    console.log(`Here you go: ${randomFruit}`)
    console.log("Delicious! May I have another")
    remove(food, randomFruit)
    console.log(`I'm sorry, we're all out. Here's what we have left --- ${food}`)
    return (
        <>
            <h1>Welcome to your random food selector!</h1>
            <h4>What would you like today?</h4>
            <ul>
                <li>I'd like one {randomFruit} please!</li>
                <li>Here you go: {randomFruit}</li>
                <li>Delicious! May I have another</li>
                <li>`I'm sorry, we're all out. Here's what we have left --- {food}</li>
            </ul>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);