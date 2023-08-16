import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';
  name = "Alia";
  myid = 1234;
  isDisabled = true;
  successClass = 'success';
  errorClass = 'error';
  hasError = false;
  msgClass = {
     success: !this.hasError,
     error: this.hasError
  };

  myprop = "yellow";
  mystyle = {
    color: "brown",
    fontStyle : "italic",
    backgroundColor : "pink"
  };

  sayHi(){
    console.log("Hello World!");
  }

  email = "abc@gmail.com";
  onKeyUpp(em: any){
    console.log(em);
    console.log(this.email);
  }

  displayName = true;
  color = 'blue';

  colors = ['pink','yellow','blue'];

  today = Date.now();
  emp = {
     id : 10,
     ename : "hjdqcbj"
  };

  price:number = 1234.78;
}
