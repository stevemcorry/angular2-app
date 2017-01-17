import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  scrollAbout(){
    document.querySelector('.aboutWraper').scrollIntoView({ behavior: 'smooth' });
  }
  scrollProjects(){
    document.querySelector('.projectsWraper').scrollIntoView({ behavior: 'smooth' });
  }
  scrollSkills(){
    document.querySelector('.skillsWraper').scrollIntoView({ behavior: 'smooth' });
  }
  scrollContact(){
    document.querySelector('.contactWraper').scrollIntoView({ behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit() {
  }

}
