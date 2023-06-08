import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/reducers/product/product.model';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-titleinput',
  templateUrl: './titleinput.component.html',
  styleUrls: ['./titleinput.component.scss']
})
export class TitleInputComponent implements OnInit {
  title = ''
  @Input() titlez = ''
  @Input() emailFormControl = { hasError: ' ' }
  @Output() sendTitletoParent: EventEmitter<String> = new EventEmitter();

  ngOnInit() {
    console.log('tileinputngOnInit', this.title)
  }

  ngOnChanges(p: any) {
    console.log('ngOnChanges1', p)
  }

  onFocusOut() {
    console.log('onFocusOut')
    this.sendTitletoParent.emit(this.title)
  }
}
