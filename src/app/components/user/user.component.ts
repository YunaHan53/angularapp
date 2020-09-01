import { Component } from '@angular/core';

import { User } from '../../models/User'
// Decorator
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

// export makes this class available outside of this file
export class UserComponent {
  // Properties
  user: User;

  // Methods
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      }
    }
  }
}
