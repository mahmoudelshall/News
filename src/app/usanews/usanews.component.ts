import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-usanews',
  templateUrl: './usanews.component.html',
  styleUrls: ['./usanews.component.css']
})
export class UsanewsComponent implements OnInit {
  news:any;
  constructor(public _NewsService:NewsService) { 
    this._NewsService.GetUsaNews().subscribe( (data)=>{
     this.news=data.articles;
    })
  }

  ngOnInit(): void {
  }

}
