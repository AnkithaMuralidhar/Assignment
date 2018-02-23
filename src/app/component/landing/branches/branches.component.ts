import { Component, OnInit, ElementRef } from '@angular/core';
import { LandingService } from '../landing.service'

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {


  branches: any = [];
  commitList: any = [];
  navBarData; any;
  currentPage = 1;
  currentBranch: any = 'master';

  constructor(private landingService: LandingService) {
    this.navBarData = {
      logo: {
        label: '',
        path: '#'
      },
      links: [
        {
          label: 'Assignment',
          path: '/path'
        }
      ]
    }
  }

  ngOnInit() {
    this.getAngularBranches();
  }

  getAngularBranches() {
    let branchUrl = "https://api.github.com/repos/angular/angular/branches";
    this.landingService.getData(branchUrl).subscribe((result) => {
      this.branches = result;
    })
  }

  onClickBranch(item) {
    this.currentBranch = item.name;
    let commitOnBranchUrl = "https://api.github.com/repos/angular/angular/commits?sha=" + item.name + "&page=0";
    this.landingService.getData(commitOnBranchUrl).subscribe((commitResult) => {
      this.commitList = commitResult;
    })
  }

  onPagination(item) {
    console.log(item);
    this.currentPage = item > 1 ? item: 1;
    let commitOnBranchUrl = "https://api.github.com/repos/angular/angular/commits?sha=" + this.currentBranch + "&page=" + this.currentPage;
    this.landingService.getData(commitOnBranchUrl).subscribe((commitResult) => {
      this.commitList = commitResult;
    })
  }
}

