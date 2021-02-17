import React from 'react'

const h2style = {
    color: 'white',
}
function Column1() {
    return (
        <div className = "col-sm">
            
            <div className = "thirteen">
            <h1>Expense Tracker</h1>
            </div>
            <img src = "pic.jpg" alt =" " className ="container-fluid p-0"   />
    <h2 align="center" id="amt" style= { h2style }>
        Total Amount <p id="budget"> </p>
        <p id = "E" style={{color:'white'}} align="center"> </p>
        <p id = "S" style={{color:'white'}} align="center"> </p>
        </h2>
    </div>
    )
}

export default Column1
