import {Component, Input, OnInit} from '@angular/core';
import {CardGroup} from '../../interfaces';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {

  @Input() cardGroup: CardGroup;

  constructor() {
    this.cardGroup = {
        title: 'Default-Group',
        cards: [
          {
            title: 'Default-Card1',
            count: 1,
            frequency: 'Week',
            text: 'We will have assignment per week for Angular. This assignment must be done before next week. Any help will be provide by Microsoft teams/class room.',
          },
          {
            title: 'Default-Card2',
            count: 2,
            frequency: 'Week',
            text: 'There will be minimum 1 assignment for JavaScript so that we can be good in html-css coding.',
          },
          {
            title: 'Default-Card3',
            count: 3,
            frequency: 'Monthly',
            text: 'There will be minimum 3 assignment for html-css so that we can be good in html-css coding.',
          }]
      };
  }

  ngOnInit(): void {
  }
}
