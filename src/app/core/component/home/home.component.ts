import { Component, OnInit } from '@angular/core';
import { HttpRoutingService } from 'src/app/shared/service/http-routing.service';

export interface MovieSearchType {
  Poster: String;
  Title: String;
  Type: String;
  Year: String;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private httpService: HttpRoutingService) { }
  Items!: any;

  searchItems!: MovieSearchType[];
  searchTitle: string = 'iron man'
  ngOnInit(): void {
    this.search()
  }
  search() {
    this.httpService.getMethod(this.searchTitle).subscribe(res => {
      this.Items = res;
      this.searchItems = this.Items.Search;
      // console.log('this.Items.Search', this.Items.Search);

    })
  }
}
