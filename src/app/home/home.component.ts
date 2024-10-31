import {Component} from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ageValue = 0;

  handleChange(event: Event) {
    this.ageValue = (event.target as HTMLInputElement).valueAsNumber;
  }

  handleSubmit(event: Event) {
    const myModalAlternative = new bootstrap.Modal('#myModal', {})
  
  }
}
