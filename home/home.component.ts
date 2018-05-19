import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import{ dblist } from '../mock';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	public records =[];
	constructor(private dataservice: DataService) { }

  ngOnInit() {
	  
	// this.dataservice.getlocal()
	  // .subscribe(data => {		  
		 //var records =  data.records;
		   //	console.log(data.records);
	   //});
  }

}
