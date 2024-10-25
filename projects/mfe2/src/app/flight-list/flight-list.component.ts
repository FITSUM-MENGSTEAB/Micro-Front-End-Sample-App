import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  public data : Array<any>;
  public getDetails: boolean = false;
  public currentList : Array<any>;

  constructor(private http: HttpClient) { }

    ngOnInit() {      
        // Simple GET request with response type <any>
        this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
            console.log('Data from dammy API', data)
            this.data = data;
        })
    }



    details(id){
      this.getDetails = true;
      this.currentList = this.data.filter((item) =>{ return item.id == id})
      console.log(this.currentList)
    }

    backToList(){
     this.getDetails = false;
    }

}
