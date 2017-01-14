import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    'Angular', 'JavaScript', 'HTML5', 'CSS3', 'JQuery', 'Node.js', 'Ionic', 'SQL', 'D3.js', 'Angular2'
  ]

  constructor() { }

  ngOnInit() {
  }

}
