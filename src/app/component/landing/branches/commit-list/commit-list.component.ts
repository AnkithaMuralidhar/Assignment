import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
  providers: [TitleCasePipe]
})
export class CommitListComponent implements OnInit {
  @Input() page: number = 1;

  @Input() set commitList(list: any[]) {
    if (list && list.length > 0) {
      this._commitList = list;
      this.paginateInternally(1);
    } else {
      this._commitList = [];
    }
  }

  get commitList() {
    return this._commitList;
  }
  _commitList = [];
  displayList = [];

  currentPage: number = 1;

  @Output() onPagination = new EventEmitter();

  constructor(private titleCasePipe: TitleCasePipe) { }

  ngOnInit() {
  }

  convertStringToTitleCase(str: string) {
    return this.titleCasePipe.transform(str);
  }

  paginate(page) {
    this.currentPage = 0;
    this.onPagination.emit(page);
  }

  paginateInternally(page) {
    this.currentPage = page > 1 ? page : 1;
    let data = this.commitList.slice(6 * (this.currentPage - 1), 6 * this.currentPage);
    if (data && data.length > 0) {
      this.displayList = this.commitList.slice(6 * (this.currentPage - 1), 6 * this.currentPage);
      return;
    } else {
      --this.currentPage;
      this.paginateInternally(this.currentPage);
    }
  }

}
