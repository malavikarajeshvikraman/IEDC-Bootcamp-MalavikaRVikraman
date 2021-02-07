{var total=0, exp=0, sav=0;
function AddRow()
{  
    var row = {
        item : document.getElementById ('item').value,
        date : document.getElementById('date').value,
        amt : document.getElementById('amount').value,
        type : document.getElementById('type').value
    }
    var table=document.getElementById('list');
 var table_len=(table.rows.length)-1;
 var color='';
 if(row.type == 'Expenses')
   { color='rgba(255, 128, 128,0.6)';
     exp+=parseInt(row.amt);
     total-=parseInt(row.amt);

   }
else 
     {color='rgba(153, 255, 187,0.6)';
     sav+=parseInt(row.amt);
     total+=parseInt(row.amt);
     } 

 var rows = table.insertRow(table_len).outerHTML="<tr style = 'background-color: " + color + " ; ' id='row"+table_len+"'><td id='type_row"+table_len+"'>"+row.type+"</td><td id='item_row"+table_len+"'>"+row.item+"</td><td id='date_row"+table_len+"'>"+row.date+"</td><td id='amt_row"+table_len+"'>"+row.amt+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' align='center' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
 document.getElementById("if-empty").style.opacity=0;
document.getElementById('date').value='';
document.getElementById('amount').value='';
document.getElementById ('item').value='';
document.getElementById("budget").innerHTML = total;
document.getElementById("E").innerHTML = 'Expenses : '+ exp;
document.getElementById("S").innerHTML = 'Savings : '+ sav;
}

function edit_row(no)
{ 

 document.getElementById("save_button"+no).style.display="inline";
 document.getElementById("edit_button"+no).style.display="none";
 var type=document.getElementById("type_row"+no);
 var item=document.getElementById("item_row"+no);
 var date=document.getElementById("date_row"+no);
 var amt=document.getElementById("amt_row"+no);
	
 var type_data=type.innerHTML;
 var item_data=item.innerHTML;
 var date_data=date.innerHTML;
 var amt_data=amt.innerHTML;

 if(type_data == 'Expenses'){
    
     exp-=parseInt(amt_data);
     total+=parseInt(amt_data);
}
else {
     sav-=parseInt(amt_data);
     total-=parseInt(amt_data);

}
 
 type.innerHTML="<input type='text' class='entry' id='type_text"+no+"' value='"+type_data+"'>";
 item.innerHTML="<input type='text'  class='entry'id='item_text"+no+"' value='"+item_data+"'>";
 date.innerHTML="<input type='date'  class='entry' id='date"+no+"' value='"+date_data+"'>";
 amt.innerHTML="<input type='number' class='entry'  id='amt_text"+no+"' value='"+amt_data+"'>";
document.getElementById("budget").innerHTML = total;
document.getElementById("E").innerHTML = 'Expenses : '+ exp;
document.getElementById("S").innerHTML = 'Savings : '+ sav;
}
function save_row(no)
{
 var type_val=document.getElementById("type_text"+no).value;
 var item_val=document.getElementById("item_text"+no).value;
 var date_val=document.getElementById("date"+no).value;
 var amt_val=document.getElementById("amt_text"+no).value;
if(type_val == 'Expenses'){
    color='rgba(255, 128, 128,0.6)';
     exp+=parseInt(amt_val);
     total-=parseInt(amt_val);
}
else {
    color='rgba(153, 255, 187,0.6)';
     sav+=parseInt(amt_val);
     total+=parseInt(amt_val);

}
 document.getElementById("type_row"+no).innerHTML=type_val;
 document.getElementById("item_row"+no).innerHTML=item_val;
 document.getElementById("date_row"+no).innerHTML=date_val;
 document.getElementById("date_row"+no).innerHTML=date_val;
 document.getElementById("amt_row"+no).innerHTML=amt_val;
 document.getElementById("row"+no).style.backgroundColor=color;
 document.getElementById("edit_button"+no).style.display="inline";
 document.getElementById("save_button"+no).style.display="none";
 document.getElementById("budget").innerHTML = total;
document.getElementById("E").innerHTML = 'Expenses : '+ exp;
document.getElementById("S").innerHTML = 'Savings : '+ sav;
}

function delete_row(no)
{var type=document.getElementById("type_row"+no);
var amt=document.getElementById("amt_row"+no);
var type_data=type.innerHTML;
var amt_data=amt.innerHTML;
alert('Deleted a row !');
if(type_data == 'Expenses'){
   
    exp-=parseInt(amt_data);
    total+=parseInt(amt_data);
}
else {
    sav-=parseInt(amt_data);
    total-=parseInt(amt_data);

}
 document.getElementById("row"+no+"").outerHTML="";
 document.getElementById("budget").innerHTML = total;
document.getElementById("E").innerHTML = 'Expenses : '+ exp;
document.getElementById("S").innerHTML = 'Savings : '+ sav;
}

}