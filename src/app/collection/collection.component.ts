import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../shared/apartments.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  myApartments = []

  constructor(private apartmentsService: ApartmentsService) { }

  getApartments(){
    this.myApartments = this.apartmentsService.getmyApartments();
  }

  remove(item){
    this.apartmentsService.removeApartment(item);
  }

  ngOnInit() {
    this.myApartments = this.apartmentsService.getmyApartments();
  }

}
