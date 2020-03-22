import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarPoolingService } from '../service/car-pooling.service';
import { CarPooling } from '../model/car-pooling';

@Component({
  selector: 'car-pooling',
  templateUrl: './car-pooling.component.html',
  styleUrls: ['./car-pooling.component.css']
})
export class CarPoolingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private carPoolingService: CarPoolingService) { }

    carpool : Array<CarPooling> = [];
    

  ngOnInit() {

    this.carPoolingService.getCarPoolingDetails()
    .subscribe(carpool => {
      this.carpool = carpool;
    });

  }

  addCarPoolDetails(){
    console.log("add Data");
  }

  deleteCarPoolDetails(){
    console.log("delete data");
  }


}
