import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-datatables',
    templateUrl: './datatables.component.html',
    styleUrls: ['./datatables.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DatatablesComponent implements OnInit {

    public data = [];
    public filterQuery = '';
    public rowsOnPage = 10;
    public sortBy = 'email';
    public sortOrder = 'asc';

    constructor(pt: PagetitleService, private http: HttpClient) {
        pt.setTitle('Data Table');
    }

    ngOnInit(): void {
        this.http.get<any>('assets/static/datatable.json')
            .subscribe((data) => {
                this.data = data;
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    remove(item) {
        var index = this.data.indexOf(item);
        this.data.splice(index, 1);
    }

}
