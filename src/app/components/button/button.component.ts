import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({required: true, alias: 'buttonText'})
  buttonText: string = '';

  @Input({required: true, alias: 'buttonStyle'})
  buttonStyle: 'white' | 'purple' = 'white';

  @Input({alias: 'isDisabled'})
  isDisabled: boolean = false;

  @Output('buttonClickedEmit') buttonClickedEmit = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmit.emit();
  }
}
