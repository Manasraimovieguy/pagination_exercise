import { Component, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pagination_exercise';
  data: any;
  totalPages: number = 0;
  selectedInterval: number = 5;
  singlePage: number = 1;
  iteration_arr: any = []


  constructor(private paginationService: PaginationService) {


  }

  ngOnInit(): void {
    this.paginationService.getData().subscribe((data) => {
      this.data = data
      this.totalPages = this.data.length / this.selectedInterval
    })

  }

  restart() {
    this.singlePage = 1
  }

  finalInterval() {
    this.singlePage = this.data.length / this.selectedInterval
  }

  nextInterval() {
    if (this.singlePage * this.selectedInterval - this.selectedInterval + 1 <= 200 - this.selectedInterval) {
      this.singlePage += 1;
    }
  }

  previousInterval() {
    if (this.singlePage * this.selectedInterval - this.selectedInterval + 1 >= this.selectedInterval) {
      this.singlePage -= 1
    }
  }

  resetVals() {
    this.singlePage = 1;
    this.totalPages = this.data.length / this.selectedInterval;
    for (let index = 1; index <= this.totalPages; index++) {
      this.iteration_arr.push(index);
    }
  }





}
