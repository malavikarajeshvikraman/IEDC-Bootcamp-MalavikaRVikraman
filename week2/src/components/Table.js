import React from 'react'

function Table() {
    return (
        <>
        <div class="seven">
        <h1>Expense Table</h1>
      </div>
      <table id="list">
        <tbody>
        <tr>
          <th id="type" className ="center">Type</th>
          <th>Item</th>
          <th id="date">Date</th>
          <th  id="amount">Amount</th>
          <th style = {{ textAlign : ' center'}} id="actions">Actions</th>
        </tr>
        <tr id="if-empty">
          <td colspan="5">Your added items will show up here!</td>
        </tr>
      </tbody>
      </table>
  </>
    )
}

export default Table
