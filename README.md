# Practice angular ngx-infinite-scroll

Article  
<https://www.freakyjolly.com/how-to-add-infinite-scroll-on-data-list-in-angular/>

> ◆ Version  
> Angular CLI: 16.1.5  
> Node: 18.17.0

## Step 1: Install ngx-infinite-scroll

```text
npm i ngx-infinite-scroll
```

## Import InfiniteScrollModule, HttpClientModule

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, InfiniteScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Step 3: Add the infinite scroll directive to your component

```html
<div class="scrollable-content" style="height: 100px;overflow: auto;" 
    infiniteScroll 
    [infiniteScrollDistance]="2"
    [infiniteScrollThrottle]="500"
    [scrollWindow]="false" 
    (scrolled)="onScroll()">
    <div *ngFor="let item of items">{{ item.name }}</div>
</div>
```

## Step 4: Create a service to fetch data

```ts
// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getItems(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    return this.http.get<any[]>(`${this.apiUrl}?_start=${skip}&_limit=${take}`);
  }
}
```

## Step 5: Install json-server and create a JSON file

```text
npm install -g json-server
```

```json
{
  "items": [
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" },
    { "id": 3, "name": "Item 3" },
    { "id": 4, "name": "Item 4" },
    { "id": 5, "name": "Item 5" },
    { "id": 6, "name": "Item 6" },
    { "id": 7, "name": "Item 7" },
    { "id": 8, "name": "Item 8" },
    { "id": 9, "name": "Item 9" },
    { "id": 10, "name": "Item 10" }
  ]
}
```

```text
json-server --watch data.json
```
