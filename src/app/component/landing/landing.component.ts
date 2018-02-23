import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  branches: any = [];
  commitList :any=[];
  constructor(private landingService: LandingService) { }

  ngOnInit() {
    this.getAngularBranches();
  }

  getAngularBranches() {
    let branchUrl = "https://api.github.com/repos/angular/angular/branches";
    this.landingService.getData(branchUrl).subscribe((result) => {
      console.log(result);
      this.branches = result;
    })
  }

  onClickBranch(item) {
    let commitOnBranchUrl = "https://api.github.com/repos/angular/angular/commits?sha=" + item.name;
    this.landingService.getData(commitOnBranchUrl).subscribe((commitResult) => {
      console.log(commitResult)
      this.commitList=commitResult;
    })

  }
}
