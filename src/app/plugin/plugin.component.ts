import {Component, OnInit} from '@angular/core';
import {PluginService} from './plugin.service';
import {CreateModuleComponent} from '../dashboard/create/create-module.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UpdatePluginComponent} from './create/update-plugin.component';
import {PluginModel} from '../model/plugin.model';

@Component({
    selector: 'app-plugin',
    templateUrl: './plugin.component.html',
    styleUrls: []
})
export class PluginComponent implements OnInit {
    private bsModalRef: BsModalRef;
    plugins: PluginModel[] = [];
    queryParam = {
        keyword: '',
        page: 0,
        size: 10
    };

    constructor(private pluginService: PluginService,
                private modalService: BsModalService) {
    }

    ngOnInit(): void {
        this.queryPlugins();
    }

    /**
     * 查询插件列表
     */
    private queryPlugins() {
        this.pluginService.queryPlugins(this.queryParam, value => {
            this.plugins = value.content;
        });
    }

    /**
     * 显示创建插件弹窗
     */
    showCreatePluginModal() {
        this.bsModalRef = this.modalService.show(UpdatePluginComponent, {
            initialState: {
                create: true,
                plugin: {}
            }
        });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.modalService.onHide.subscribe(() => {
            this.queryPlugins();
        });
    }

    /**
     * 编辑插件
     * @param pluginItem pluginItem
     */
    showUpdatePluginModal(pluginItem: PluginModel) {
        this.bsModalRef = this.modalService.show(UpdatePluginComponent, {
            initialState: {
                create: false,
                plugin: pluginItem
            }
        });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.modalService.onHide.subscribe(() => {
            this.queryPlugins();
        });
    }

    /**
     * 删除插件
     * @param pluginItem pluginItem
     */
    removePlugin(pluginItem: PluginModel) {
        this.pluginService.removePlugin(pluginItem.id, () => {
            this.queryPlugins();
        });
    }
}
