import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {TypeaheadMatch} from 'ngx-bootstrap';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: []
})
export class LibraryComponent {
    books = [{name: 'java'}, {name: 'c'}, {name: 'c++'}, {name: 'python'}, {name: 'object-c'}];
    asyncSelected: string;
    typeaheadLoading: boolean;
    typeaheadNoResults: boolean;
    dataSource: Observable<any>;
    statesComplex: any[] = this.books;

    constructor() {
        this.dataSource = Observable.create((observer: any) => {
            // Runs on every search
            observer.next(this.asyncSelected);
        })
            .pipe(
                mergeMap((token: string) => this.getStatesAsObservable(token))
            );
    }

    getStatesAsObservable(token: string): Observable<any> {
        const query = new RegExp(token, 'ig');

        return of(
            this.statesComplex.filter((state: any) => {
                return query.test(state.name);
            })
        );
    }

    changeTypeaheadLoading(e: boolean): void {
        this.typeaheadLoading = e;
    }

    typeaheadOnSelect(e: TypeaheadMatch): void {
        console.log('Selected value: ', e.value);
    }
}
