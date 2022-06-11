import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-egyptnews',
  templateUrl: './egyptnews.component.html',
  styleUrls: ['./egyptnews.component.css']
})
export class EgyptnewsComponent implements OnInit {
   news:any;
  constructor(public _NewsService:NewsService) { 
    this._NewsService.GetEgyptNews().subscribe( (data)=>{
     this.news=data.articles;
    })
  }

  ngOnInit(): void {
  }

}
