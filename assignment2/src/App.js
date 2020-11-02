import React, {useState} from 'react';
import './App.css';
import Valid from './components/Validation'
import Char from './components/Char'

function App() {
  const [state, setState] = useState ({
     text: '',
     id: ''
  })
 

const getTextHandler = (e) => {
  setState ({
    text: e.target.value
  })
  
 
}
const wordLength = state.text.length;
const wordArray = state.text.split('');

const deleteCharHandler = (index) =>{
  const text = state.text.split('');
  text.splice(index,1);
  const updatedText = text.join('')
  setState({text: updatedText});
}
const letter = wordArray.map((char, index)=>{

return(
  <Char character={char} 
  key={index}
  clicked={()=> deleteCharHandler(index)} ></Char> 
) 
}

)

  return (
    <div className="App">
     <input onChange={getTextHandler} ></input>
     <Valid text={state.text} 
     textLength={wordLength}
     ></Valid>
     <hr/>
    {letter}
    </div>
  );
}

export default App;
