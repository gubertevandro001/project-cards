import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  onCardButtonClicked() {
    console.log('Button clicked!');
  }
}
