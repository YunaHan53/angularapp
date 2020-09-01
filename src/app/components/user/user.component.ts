import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

// export makes this class available outside of this file
export class UserComponent {
  // Properties
  firstName = 'John';
  lastName = 'Doe';
  age = 30;

  // Methods
  constructor() {
    this.sayHello(); // Hello John
    console.log(this.age); // 30
    this.hasBirthday();
    console.log(this.age); // 31
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`)
  }

  hasBirthday() {
    this.age += 1;
  }
}
