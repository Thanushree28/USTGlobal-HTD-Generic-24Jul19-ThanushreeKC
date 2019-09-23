function validate(){
    let employeeData = document.forms['Employee form'];
    let empPassword = employeeData.pass.value;
    let empCPassword = employeeData.cpass.value;
    // if(empPassword==='' && empCPassword===''){
    //     return false;
    // }
    if(empPassword === empCPassword){
        alert('Success');
        return true;
    }
    else{
        alert('Password is not matching');
        return false;
    }
}