import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	 public getMyItems =[];
	 public articles =[];
	

  constructor(private dataservice: DataService) {	
		
	}
	profile = {};
	
  ngOnInit() {
	  this.dataservice.getMyItems()
	  .subscribe(data => {				  
            
		//	var new_articles = [];
		//	let array = data.articles;
		//	array.forEach(function (value) {
		//	var new_temp = []
		//	new_temp['title'] =  value.title;
		//	new_temp['author'] = value.author;
		//	new_temp['description'] = value.description;
		//	new_temp['url'] = value.url;
			//new_temp['urlToImage'] = value.urlToImage;
		//	new_temp['publishedAt'] = value.publishedAt;
		//	new_articles.push(new_temp);
			//});				
			//console.log(new_articles);
		//	this.articles = new_articles;					
					    
           });
	 
  }


}
