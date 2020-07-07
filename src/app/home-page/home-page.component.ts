import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  posts;
  
 clicked : boolean;

  idx : number;
  constructor(private http: HttpClient) { 
    this.clicked = false;

  }

  ngOnInit(): void {
    this.http.get('https://5f045ade8b06d60016dde891.mockapi.io/blogs').
    subscribe((data: any[])=>{
      console.log(data);
      this.posts = data;
    });
    console.log(this.posts);  
  }

  viewBlog(idx : number){
    this.idx = idx;
    this.clicked = true;
  }

  toggleView(){
    this.clicked = false;
  }

}
