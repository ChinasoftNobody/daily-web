import {Component, OnInit} from '@angular/core';
import {PluginService} from './plugin.service';
import {CreateModuleComponent} from '../dashboard/create/create-module.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CreatePluginComponent} from './create/create-plugin.component';

@Component({
    selector: 'app-plugin',
    templateUrl: './plugin.component.html',
    styleUrls: []
})
export class PluginComponent implements OnInit {
    private bsModalRef: BsModalRef;
    private plugins: any = [];
    private queryParam = {
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
        this.bsModalRef = this.modalService.show(CreatePluginComponent);
        this.bsModalRef.content.closeBtnName = 'Close';
        this.modalService.onHide.subscribe(() => {
            this.queryPlugins();
        });
    }
}
