$(document).ready(readyNow);

let totalSalary = 0

function readyNow() {
    console.log('jQ ready')
    $('#submit').on('click', addEmployee)
  
}

function onDelete(salary) {
    $(this).closest('tr').remove();
    totalSalary = totalSalary - parseInt(salary)
    //$(this).closest('box').remove();
    //<td> <button class = "btn delete">Delete</button> </td>
}

function addEmployee() {

    //console.log('employee info added')

    let employee = {
        name: $('#nameIn').val(),
        lastName: $('#lastNameIn').val(),
        ID: $('#idIn').val(),
        Title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()



    }
    if (employee.annualSalary > 0) {
        totalSalary = totalSalary + parseInt(employee.annualSalary)
    } else {
        console.log(`${employee.annualSalary} isn't a number you halfwit`)
    }
    $('#totalMonthly').html(`Total Monthly: $${totalSalary}`)
    //if()

    $('#employeeTable').append(`
        <tr> 
            <td>${employee.name}</td>
            <td>${employee.lastName}</td>
            <td>${employee.ID}</td>
            <td>${employee.Title}</td>
            <td>${employee.annualSalary}</td>
            <td> <button class = "deleteBtn">Delete</button</td>
        </tr>
        
        
        
    `)
    $('.deleteBtn').on('click', onDelete(employee.annualSalary));
    //clear input

    $('#nameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

    if (totalSalary > 20000) {
        $('#monthlyColor').addClass('bg-danger')
    }
    console.log(employee);
    //.name, employee.lastName, employee.ID, employee.Title, employee.annualSalary

}


  


// function  Calculator(){

//     let salaryCalculator = 0;

//     console.log('testing')




// A 'Submit' button should collect the form information, 
//  store the information to calculate monthly costs, 
// append information to the DOM and clear the input fields. 
// Using the stored information,
//  calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, 
//  add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM.
//  For Base mode, it does **not** need to remove that Employee's salary from the reported total.
