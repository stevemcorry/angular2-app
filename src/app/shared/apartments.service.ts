import { Injectable } from '@angular/core';
import { Apartment } from "./apartment.model";

@Injectable()
export class ApartmentsService {
  private apartments: Apartment[] = [
    {name: 'king henry', owner: 'Steve'},
    {name: 'king', owner: 'Julia'},
    {name: 'henry', owner: 'Cramer'},
    {name: 'queen henry', owner: 'Mary'},
    {name: 'king henry', owner: 'Spence'},
  ];

private myApartments: Apartment[] = [];

  getApartments() {
    return this.apartments;
  }
  getmyApartments(){
    return this.myApartments;
  }
  addToApartments(item: Apartment){
    if(this.myApartments.indexOf(item) !== -1){
      
    } else {
      this.myApartments.push(item);
    }
  }
  removeApartment(item: Apartment){
    this.myApartments.splice(this.myApartments.indexOf(item), 1);
  }

}
