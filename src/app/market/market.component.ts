import { Component, OnInit } from '@angular/core';
import { ApartmentsService } from '../shared/apartments.service';
import { Apartment } from '../shared/apartment.model'

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  apartments = [];

  addToApartments(item: Apartment){
    this.apartmentsService.addToApartments(item);

  }

  constructor(private apartmentsService: ApartmentsService) { }

  ngOnInit() {
    this.apartments = this.apartmentsService.getApartments();
  }

}
