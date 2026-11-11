function rregjistroStudentin(event){
    event.preventDefault();
    let fistName = document.getElementById('fName').value;
    let lastName = document.getElementById('lName').value;
    console.log(fistName+' '+lastName);

    let studentData = {
        fName: fistName,
        lName: lastName
    }
    console.log(studentData);
}