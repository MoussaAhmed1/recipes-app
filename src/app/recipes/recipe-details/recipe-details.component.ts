import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  // how to read query parameters from the url:-
  
  constructor(private activatedRoute: ActivatedRoute,private router:Router){}

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
    })
    
    this.activatedRoute.fragment.subscribe(frameElement => {
      console.log(frameElement);
    })
    
  }
  onchangeTab(tab:string){
    this.router.navigate([tab],{relativeTo:this.activatedRoute})
  }
}
