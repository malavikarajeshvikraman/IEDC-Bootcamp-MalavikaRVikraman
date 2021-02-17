import React  from 'react';
import ReactDOM from "react-dom";
import Column1 from './components/Column1'
import Column2 from './components/Column2'
import './App.css';
function App() {
 
  return (
    
    <body style= {{ overflow:'hidden' , margin:0}} >
      <div className = "container">
        <div className ="row">
             < Column1 />
             < Column2 />
        </div>
      </div>
    </body>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));

export default App;
