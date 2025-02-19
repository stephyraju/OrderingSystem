import { Component, OnInit } from '@angular/core';
import { FoodService } from '../Services/food/food.service';
import { Food } from '../shared/models/food';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:Food[] = []
  constructor(private foodService:FoodService, private route:ActivatedRoute) { }

 ngOnInit(){
    this.route.params.subscribe(params=>{
      if(params['searchTerm']){
        this.foods = this.foodService.getAll().filter(food=>food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }else{
        this.foods = this.foodService.getAll();
      }

    })
    this.foods = this.foodService.getAll();
  }
}
