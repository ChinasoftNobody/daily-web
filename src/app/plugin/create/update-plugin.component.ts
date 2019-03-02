import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {PluginService} from '../plugin.service';
import {PluginModel} from '../../model/plugin.model';

@Component({
    selector: 'app-create-plugin-modal',
    templateUrl: './update-plugin.component.html'
})
export class UpdatePluginComponent implements OnInit{
    public plugin: PluginModel;
    create: boolean;
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
    updatePlugin() {
        this.pluginService.updatePlugin(this.plugin, value => {
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
