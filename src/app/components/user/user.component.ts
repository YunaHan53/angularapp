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
  lastName = 'Smith';
  age = 30;
  address = {
    street: '50 Main Street',
    city: 'Boston',
    state: 'MA'
  }

  // Methods
  constructor() {

  }

}
