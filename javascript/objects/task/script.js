const employee = 
[
    {
        name:"swati sen",
        age:"21",
        city:"indore",
        EmpId:"123abc"
    },
     {
        name:"alice burner",
        age:"29",
        city:"california",
        EmpId:"345abc"
    },
    
     {
        name:"Jhon Doe",
        age:"25",
        city:"germany",
        EmpId:"678abc"
    },
    
     {
        name:"black smith",
        age:"24",
        city:"hogwords",
        EmpId:"910abc"
    },
    
     {
        name:"serious black",
        age:"31",
        city:"australia",
        EmpId:"0987bfr"
    },
    

]
const tablebody = document.querySelector("#empDetails tbody");

employee.forEach(emp => {

   const {name , age , city , EmpId} = emp;

   const  row = document.createElement('tr');
   row.innerHTML=
     ` <td>${name}</td>
<td>${age}</td>
<td>${city}</td>
<td>${EmpId}</td>  `;

tablebody.appendChild(row);
});

