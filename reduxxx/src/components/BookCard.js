import React from 'react'
import './card.css'


const WantedCard = props =>{


    return(
        <ol>
    <div className="card-container">
    <h3>{props.book.name}</h3>
    <h3>{props.book.authors}</h3>
    <h4>released at {props.book.released}</h4>
    </div>
            
        </ol>
    )
}


export default WantedCard