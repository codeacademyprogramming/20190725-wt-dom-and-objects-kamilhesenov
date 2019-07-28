"use sstrict";

let students = [];

let inputs = document.getElementsByClassName("form-control");

function Student(name,surname,email,birthday){
    this.Name = name;
    this.Surname = surname;
    this.Email = email;
    this.Birthday = birthday;
    this.getAverageScore = function(){
        return this.Name + " " + this.Surname + " " + this.Email + " " + this.Birthday;
    }

}

function addStudent(){
    if(inputs[0].value != "" && [1].value != "" && [2].value != "" && [3].value != ""){
    
    let s = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    students.push(s);
    reset();
    showstudents();
    }else{
        alert("Fill all inputs");
    }
    
}

function reset(){
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value="";
    }

}

function showstudents(){
    let rows = "";

    for(let i = 0; i <students.length; i++){
        rows += `<tr>
          <th scope="row">${i+1}</th>
          <td>${students[i].Name}</td>
          <td>${students[i].Surname}</td>
          <td>${students[i].Email}</td>
          <td>${students[i].Birthday}</td>
        </tr>`
    }
document.getElementById("table-body").innerHTML = rows;

}