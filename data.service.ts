import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import{ mockdash } from './dashboard/mockdash';
import{ dblist } from './mock';




@Injectable({
  providedIn: 'root'
})
export class DataService {
	//public articles =[];
  constructor(private _http: HttpClient) { }
  
   getMyItems() {
	  return this._http.get<mockdash>('	https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7f3f9f0d766745f3b5e648d79a51460e')
   }
   getlocal(){
	   return this._http.get<dblist>('http://172.21.4.146/learning/venky/database.php')
   }
	  
	
   }
        
  		
	  //.subscribe(data => {
					  
                       // var articles = data.articles;			
						
                      //  var new_articles = [];
						//var leng = articles.length
					//	for(var i=0;i<leng;i++){
						//	var new_temp = []
						//	new_temp['title'] =  articles[i]['title'];
						//	new_temp['author'] = articles[i]['author'];
						//	new_temp['description'] = articles[i]['description'];
						//	new_articles.push(new_temp);
						//};
						
						//var new_articles = [];
						//let array = data.articles;
					//	array.forEach(function (value) {
						//	var new_temp = []
						//	new_temp['title'] =  value.title;
						//	new_temp['author'] = value.author;
						//	new_temp['description'] = value.description;
						//	new_temp['url'] = value.url;
						//	new_temp['urlToImage'] = value.urlToImage;
						//	new_temp['publishedAt'] = value.publishedAt;
						//	new_articles.push(new_temp);
						//});
							//console.log(value.title);
					//	console.log(new_articles);
					//	this.articles = new_articles;
						//console.log(new_articles)
                       // console.log(data);
					    
          // });
	  


//}
