import React from 'react'
const style ={ display:'inline-block',
               padding:'16px',
               textAlign:'center',
               margin:'16px',
               border:'1px solid black' }
const char =(props)=>{
    return (
      <div style={style} onClick={props.clicked} >
    <p>{props.character}</p>
      </div>
    )
}

export default char;