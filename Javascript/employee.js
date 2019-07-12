function addEmployee(){
    //alert("Welcome to javaScript.................");
   // var employeeId=document.emp.eid.value;
    //var employeeName=document.emp.ename.value;

    var employeeId=document.getElementById('empid').value;
    var employeeName=document.getElementById('empname').value;
    var employeeCourse=document.getElementsByName('ecourse');
    var qual=document.getElementById('equal');
    var radio=document.getElementById('online');
    var val=[];
    console.log(employeeCourse.length);
   
    for(var i=0,j=0;i<employeeCourse.length;i++){
        if(employeeCourse[i].checked)
            arr[j]=employeeCourse[i].value;
    j++;
    } 
    alert(employeeId+ " " +employeeName+" "+ qual+ " " + radio);
}

