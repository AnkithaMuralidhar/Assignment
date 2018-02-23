import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  _branches: any = [];
  activeItem: number = 0;

  @Output() onClickBranch = new EventEmitter();

  @Input() set branches(branches: any[]) {
    if (branches && branches.length > 0) {
      this._branches = this.removeStupidBranches(branches);
      let masterObject = this.branches.find((item) => item.name.toLowerCase() === 'master');
      this.onClickBranch.emit(masterObject);
    } else {
      this._branches = [];
    }
  }

  get branches() {
    return this._branches;
  }

  constructor() { }

  ngOnInit() {
  }

  /**
   * Well git has weird branch names , lets remove those and keep only those which sense
   * @param branches
   */
  removeStupidBranches(branches: any[]): any[] {
    // Latest branches on top. 
    return branches.filter((branch) => branch.name === 'master' || !isNaN(Number.parseInt((<string>branch.name).charAt(0)))).reverse();
  }

  /**
   * Execued when the user clicks on branch
   */
  onClickItem(item, index) {
    this.activeItem = index;
    this.onClickBranch.emit(item);
  }

}
