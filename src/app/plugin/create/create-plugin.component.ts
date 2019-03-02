import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {PluginService} from '../plugin.service';

@Component({
    selector: 'app-create-plugin-modal',
    templateUrl: './create-plugin.component.html'
})
export class CreatePluginComponent implements OnInit{
    public plugin: any = {
        name: '',
        desc: '',
        type: '',
        createTime: 0,
        updateTime: 0
    };
    public pluginTypes: any = [];

    constructor(public bsModalRef: BsModalRef,
                private pluginService: PluginService) {
    }
    ngOnInit(): void {
        this.queryTypes();
    }


    /**
     * 创建插件
     */
    createPlugin() {
        this.pluginService.createPlugin(this.plugin, value => {
            this.bsModalRef.hide();
        });
    }



    /**
     * 查询插件类型
     */
    private queryTypes() {
        this.pluginService.queryTypes(value => {
            this.pluginTypes = value;
        });
    }
}
