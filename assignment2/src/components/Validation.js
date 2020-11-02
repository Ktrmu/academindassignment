import React from 'react'

const validation = (props) => {
    const valid = () =>{
            if (props.textLength > 8){
                return ('Text too long ')
            }
            else if (props.textLength < 5){
                return ('Text too short')
            }
            /*else {
                return 'Text length Valid'
            }*/    
    }
    return (
        <div>
            <p>{props.text}</p>
            <p>Text has {props.textLength} letters </p>
            <p>{valid()}</p>
        </div>
    )
}

export default validation;