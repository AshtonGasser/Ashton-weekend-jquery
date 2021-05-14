$(document).ready(readyNow);



function readyNow() {
    console.log('jQ ready')


    $('#submit').on('click', onClick)
    $('#delete').on('click', '.deleteBtn', onDelete); 
}

function onClick() {

    console.log('CLICK!')
}

function onDelete(){

    console.log("BEGON")
    //$(this).closest('box').remove();
}

let employee = {
    name : '',
    lastName : '',
    ID : '',
    Title : '',
    annualSalary : ''



}