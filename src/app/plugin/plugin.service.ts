import {Injectable} from '@angular/core';
import {HttpService} from '../services/http.service';
import {daily_server} from '../services/rest.config';

@Injectable({
    providedIn: 'root',
})
export class PluginService {
    constructor(private httpService: HttpService) {
    }

    /**
     * 查询插件列表
     * @param queryParam queryParam
     * @param success success
     */
    queryPlugins(queryParam: { size: number; page: number; keyword: string }, success: (value) => void) {
        this.httpService.post(daily_server.path('queryPlugins'), queryParam, value => {
            success(value);
        });
    }

    /**
     * 查询插件类型列表
     * @param success success
     */
    queryTypes(success: (value) => void) {
        this.httpService.post(daily_server.path('queryTypes'), {}, value => success(value));
    }

    /**
     * 创建插件信息
     * @param plugin plugin
     * @param success success
     */
    createPlugin(plugin: any, success: (value) => void) {
        this.httpService.post(daily_server.path('createPlugin'), plugin, value => success(value));
    }

    /**
     * 根据ID查询插件信息
     * @param id id
     * @param success success
     * @param error  error
     */
    queryPluginById(id: string, success: (value) => void, error?: (error1) => void) {
        this.httpService.post(daily_server.path('queryPluginById'), id, value => success(value), error);
    }
}
