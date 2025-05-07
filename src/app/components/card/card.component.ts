import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-card',
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({required: true, alias: 'planType'})
  planType: string = '';

  @Input({required: true, alias: 'planPrice'})
  planPrice: number = 0;

  @Input({required: true, alias: 'cardStyle'})
  cardStyle: 'orange' | 'purple' = 'orange';

  @Output('onButtonClicked')
  buttonClickedEmit = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmit.emit();
  }
}
