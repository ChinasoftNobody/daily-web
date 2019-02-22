import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {PageChangedEvent, TypeaheadMatch} from 'ngx-bootstrap';
import {LibraryService} from './library.service';
import {slideToBottomTransition} from '../animations/slide';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: [],
    animations: [slideToBottomTransition()]
})
export class LibraryComponent implements OnInit {
    books = [];
    currentPage = 4;
    pageSize = 24;
    asyncSelected: string;
    typeaheadLoading: boolean;
    dataSource: Observable<any>;
    tipBooks = this.books;
    topNum = 10;

    constructor(private libraryService: LibraryService) {
        this.dataSource = Observable.create((observer: any) => {
            // Runs on every search
            observer.next(this.asyncSelected);
        }).pipe(
            mergeMap((token: string) => this.getStatesAsObservable(token))
        );
    }

    /**
     * 获取键入提示信息
     * @param token 输入值
     */
    getStatesAsObservable(token: string): Observable<any> {
        const query = new RegExp(token, 'ig');
        return of(
            this.tipBooks.filter((state: any) => {
                return query.test(state.name);
            })
        );
    }

    /**
     * loading事件
     * @param e 事件
     */
    changeTypeaheadLoading(e: boolean): void {
        this.typeaheadLoading = e;
    }

    /**
     * 选择事件
     * @param e 事件
     */
    typeaheadOnSelect(e: TypeaheadMatch): void {
        this.libraryService.queryBooks(e.value, null).subscribe(result => {
            this.books = JSON.parse(JSON.stringify(result)).body.result.content;
        }, error1 => {
            console.error(error1);
        });
    }

    /**
     * 监听输入变化
     */
    textChange() {
        this.libraryService.queryBooks(this.asyncSelected, this.topNum).subscribe(result => {
            this.books = JSON.parse(JSON.stringify(result)).body.result.content;
        }, error1 => {
            console.error(error1);
        });
    }

    /**
     * 分页查询
     * @param $event 事件
     */
    pageChanged($event: PageChangedEvent) {
        console.log($event.page);
    }

    /**
     * 点击搜索
     */
    search() {
        this.libraryService.queryBooks(this.asyncSelected, null).subscribe(result => {
            this.books = JSON.parse(JSON.stringify(result)).body.result.content;
        }, error1 => {
            console.error(error1);
        });
    }

    /**
     * 监听回车键事件
     */
    enterKeyUp() {
        this.search();
    }

    ngOnInit(): void {
        this.libraryService.queryBooks(null, null).subscribe(result => {
            this.books = JSON.parse(JSON.stringify(result)).body.result.content;
        }, error1 => {
            console.error(error1);
        });
    }
}
