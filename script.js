


function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
            resetForm();}
        else{
            updateRecord(formData);
            resetForm();}
        resetForm();
        
    }
}

//reading data from form
function readFormData() {
    
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["email"] = document.getElementById("email").value;
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    formData["role"] = document.getElementById("role").value;
    return formData;
}

//inserting data into the table
function insertNewRecord(data) 
{
    var table = document.getElementById("userlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.username;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.role;
    cell3= newRow.insertCell(2);
    cell3.innerHTML = `<button onClick="onEdit(this)" id="ubtn" style="border:none;background-color:green;color:white;">Edit</button>
                       <button onClick="onDelete(this)" style="border:none;background-color:red;color:white;">Delete</button>`;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.fname;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.lname;    


}

//reset the form
function resetForm() 
{
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("role").value = "";    
    selectedRow = null;
}

//getting the previous values while updating the record
function onEdit(td)
 {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("role").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("fname").value = selectedRow.cells[4].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[5].innerHTML;
    


}

//updating the record
function updateRecord(formData) 
{
    
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.role;
    
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.fname;
    selectedRow.cells[6].innerHTML = formData.lname;

    

}


//performing deletion of the record
function onDelete(td) 
{
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("userlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


//validating the entries by user
function validate() 
{
     
    isValid = true;



    if ((document.getElementById("username").value == "")   ){
        isValid = false;
        alert("Enter valid Username");
        return;
    } 


  
   validatee();      
		  

  
    var ffName = /^[a-zA-Z]+[a-zA-Z]+$/;
    var fffname = document.getElementById('fname').value;
    if ((document.getElementById("fname").value == "")||(!ffname.test(fffname))) {
        isValid = false;
        alert("Enter valid first name!!");
        return;
    }


    var llName = /^[a-zA-Z]+[a-zA-Z]+$/;
    var lllname = document.getElementById('lname').value;
    if ((document.getElementById("lname").value == "")||(!llname.test(lllname))) {
        isValid = false;
        alert("Enter valid last name!!");
        return;
    }




    if (document.getElementById("role").value == "") {
        isValid = false;
        alert("Select the role!!");
        return;
    } 



    return isValid;
    
}

function validatee() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
   return;
  } else {
    alert(" Email is invalid!!");
  }
 
}




$("#validate").on("click", validatee);

