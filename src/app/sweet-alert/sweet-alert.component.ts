import { Component } from '@angular/core';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent {

  response="done";
  Id=0;
  Name='';
  Age=0;
  Email='';
  rows: any[] = [
    {Id:1,Name:'tamer',Age:36,Email:'tamerhemaida@gmail.com'}
  ];
  addRow() {
    const newRow = {
      // Define your row data properties here
      Id:this.Id,
      Name:this.Name,
      Age:this.Age,
      Email:this.Email
    };

    this.rows.push(newRow);
  }

  simpleAlert(){ 
    if (this.response ==="done"){
      Swal.fire('response is Done'); 
    } 
    else
    {
      Swal.fire('response is NOT done');  
    }
  }  
    
  alertWithSuccess(){  
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
  }  
  erroalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong!',  
      footer: '<a href>Why do I have this issue?</a>'  
    })  
  }  
  topend()  
  {  
    Swal.fire({  
      position: 'top-end',  
      icon: 'success',  
      title: 'Your work has been saved',  
      showConfirmButton: false,  
      timer: 1500  
    })  
  }  
  confirmBox(){  
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
        Swal.fire(  
          'Deleted!',  
          'Your imaginary file has been deleted.',  
          'success'  
        )  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Your imaginary file is safe :)',  
          'error'  
        )  
      }  
    })  
  }  
}

