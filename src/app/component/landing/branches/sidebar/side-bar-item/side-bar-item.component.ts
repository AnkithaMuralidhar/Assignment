import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['./side-bar-item.component.css'],
  providers: [TitleCasePipe]
})
export class SideBarItemComponent implements OnInit {

  @Input() item: any;
  @Input() active: boolean = false;
  @Output() onClickItem =  new EventEmitter();

  constructor(private titleCasePipe: TitleCasePipe) { }

  ngOnInit() {
  }

  convertStringToTitleCase(str: string) {
    return this.titleCasePipe.transform(str);
  }

  onItemClick(item) {
    this.onClickItem.emit(item);
  }

}
