import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent {
  items: any[] = [];
  page = 1;
  pageSize = 5;
  hasMoreData = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadMoreData();
  }

  onScroll() {
    console.log('onScroll');
    if (this.hasMoreData) {
      this.page++;
      this.loadMoreData();
    }
  }

  loadMoreData() {
    this.dataService.getItems(this.page, this.pageSize).subscribe((items) => {
      if (items.length === 0) {
        this.hasMoreData = false;
      } else {
        this.items = [...this.items, ...items];
      }
    });
  }
}
