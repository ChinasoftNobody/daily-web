import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LibraryService {

    /**
     * 查询数据
     * @param keyword keyword
     * @param topNum topNum
     */
    queryBooks(keyword: string, topNum: number) {
        if (!!!keyword) {
            // queryAll
            return [{name: 'java', isCollapsed: true}, {name: 'c', isCollapsed: true}, {name: 'c++', isCollapsed: true},
                {name: 'python', isCollapsed: true}, {name: 'object-c', isCollapsed: true},
                {name: 'java', isCollapsed: true}, {name: 'c', isCollapsed: true}, {name: 'c++', isCollapsed: true},
                {name: 'python', isCollapsed: true}, {name: 'object-c', isCollapsed: true}];
        }
        // query filter
        return [{name: 'java', isCollapsed : true}, {name: 'c', isCollapsed : true}, {name: 'c++', isCollapsed : true}];
    }
}
