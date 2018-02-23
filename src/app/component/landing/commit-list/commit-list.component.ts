import { Component, OnInit, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
  providers: [TitleCasePipe]
})
export class CommitListComponent implements OnInit {
  @Input() commitList = [];
  constructor(private titleCasePipe: TitleCasePipe) { }

  ngOnInit() {
  }

  convertStringToTitleCase(str: string) {
    return this.titleCasePipe.transform(str);
  }

}
