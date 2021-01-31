import {Component, OnInit} from '@angular/core';
import {CardGroup} from '../../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cardGroupList: CardGroup[] = [];

  constructor() {
    this.cardGroupList = this.getCardGroupList();
  }

  ngOnInit(): void {

  }

  private getCardGroupList(): CardGroup[] {
    let allCardGroup: CardGroup[];
    allCardGroup = [
      {
        title: 'All Students',
        cards: [
          {
            title: 'Student1',
            count: 1,
            frequency: 'English',
            text: 'We will have assignment per week for Angular. This assignment must be done before next week. Any help will be provide by Microsoft teams/class room.',
          },
          {
            title: 'Student2',
            count: 2,
            frequency: 'Week',
            text: 'There will be minimum 1 assignment for JavaScript so that we can be good in html-css coding.',
          },
          {
            title: 'Student3',
            count: 3,
            frequency: 'Science',
            text: 'There will be minimum 3 assignment for html-css so that we can be good in html-css coding.',
          }]
      },
      {
        title: 'All Teachers',
        cards: [
          {
            title: 'Teacher1',
            count: 1,
            frequency: 'English',
            text: 'We will have assignment per week for Angular. This assignment must be done before next week. Any help will be provide by Microsoft teams/class room.',
          },
          {
            title: 'Teacher3',
            count: 2,
            frequency: 'Math',
            text: 'There will be minimum 1 assignment for JavaScript so that we can be good in html-css coding.',
          }, {
            title: 'Teacher2',
            count: 3,
            frequency: 'Science',
            text: 'There will be minimum 3 assignment for html-css so that we can be good in html-css coding.',
          }]
      }];
    return allCardGroup;
  }
}
