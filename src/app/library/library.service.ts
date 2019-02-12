import {Injectable} from '@angular/core';
import {BookModel} from '../model/book.model';

@Injectable({
    providedIn: 'root',
})
export class LibraryService {

    /**
     * 查询数据
     * @param keyword keyword
     * @param topNum topNum
     */
    queryBooks(keyword: string, topNum: number): BookModel[] {
        let number = 13;
        if (!!!keyword) {
            // queryAll
            number = 18;
        }
        // query filter
        const result: BookModel[] = new Array<BookModel>(number);
        for (let i = 0; i < number; i++) {
            result[i] = new BookModel();
        }
        return result;
    }
}
