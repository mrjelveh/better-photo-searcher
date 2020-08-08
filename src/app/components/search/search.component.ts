import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SEARCHPHOTO } from '../models/search-api';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  query: string;
  photo: SEARCHPHOTO;
  formGroup: FormGroup;

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20
  };

  constructor(private api: GlobalService, private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      searchInput: [''],
      oriention: [''],
      orderBy: [''],
      colorVariation: ['']
    });
  }

  getSearch(event: any) {
    event.preventDefault();
    const values = this.formGroup.value;
    this.getAPI(values.searchInput, values.oriention, values.orderBy, null, null, values.colorVariation);
  }

  getAPI(query, oriention?, orderBy?, perPage?, pageIndex?, colorVariation?) {
    this.api.getSearchData(query, oriention, orderBy, perPage, pageIndex, colorVariation).subscribe(
      res => {
        this.photo = res['results'];
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );
  }
}
