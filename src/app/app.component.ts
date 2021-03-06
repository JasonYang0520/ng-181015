import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  keyword = '0';

  data$;

  constructor(public datasvc: DataService) {
  }

  ngOnInit(): void {
    this.data$ = this.datasvc.load();
  }

  public get page(): number {
    return parseInt(this.keyword);
  }

  doSearch(value) {
    this.keyword = value;
    console.log('Your search: ' + value);
  }

  doDelete(id: number) {
    this.datasvc.doDelete(id).subscribe((v) => {

      this.data$ = this.datasvc.load();

    });
  }
}
