import React, {useEffect} from 'react'
import {getWanted} from '../actions'
import { connect } from 'react-redux'
import BookCard from './BookCard'
import './card.css'
const WantedList = (props) =>{
 
    useEffect(() => {
        return props.getWanted()
    }, [])
   
    return(
        <div className="book-container">
            
                <h2 style={{color:'crimson'}}>GOT books:</h2>
                {props.isLoading ? <p>Loading data...</p> : null}
                {props.error ? <p style={{color:'red'}}>{props.error}</p> : null}
                {props.books.map((books) =>(
                    <BookCard book={books}/>
                ))}
           
            
        </div>

    )
}


const mapStateToProps = (state) =>{
    return{
        isLoading: state.isLoading,
        books: state.books,
        error:state.error
    }
}

export default connect(mapStateToProps, {getWanted})(WantedList)
