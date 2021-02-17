import React from 'react'

function FormBox() {
    return (
        <>
        <div id="form-box">
        <form>
          <div id='small'>
            <span>Type</span> 
              <select id="type">
                  <option value='Expenses' >Expenses</option>
                  <option value='Savings' >Savings</option>
              </select>
          </div>
          
          <div  id='small'>
            <span>Item </span> <input type="text" id="item" placeholder="What did you spend on?"/>
          </div>
          
          <div  id='small'>
            <span>Date</span> <input type="date" id="date"/>
          </div>
          
          <div  id='small'>
            <span>Amount</span> <input type="number" id="amount" placeholder="How much?"/>
          </div>
          
          
        </form>
        </div>
        <div class="button-container">
                <div id="button" class='button -flower center' onclick = 'AddRow()'>Add a new entry</div>
            </div>
            <br/>
        </>
    )
}

export default FormBox
