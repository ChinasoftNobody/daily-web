import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PluginService} from '../plugin.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UpdateFieldComponent} from './updateField/update-field.component';
import {DataFieldModel, PluginModel} from '../../model/plugin.model';

@Component({
    selector: 'app-plugin-detail-modal',
    templateUrl: './plugin-detail.component.html'
})
export class PluginDetailComponent implements OnInit {
    plugin: PluginModel = {};

    private bsModalRef: BsModalRef;

    constructor(private pluginService: PluginService,
                private activatedRout: ActivatedRoute,
                private modalService: BsModalService) {
    }

    ngOnInit(): void {
        this.activatedRout.params.subscribe(data => {
            this.initPluginInfo(data.id);
        }, error1 => {
            console.error(error1);
        });
    }

    /**
     * 初始化plugin信息
     */
    private initPluginInfo(id: string) {
        this.pluginService.queryPluginById(id, value => {
            this.plugin = value;
        });
    }

    /**
     * 添加字段弹窗
     */
    showAddFieldModal() {
        this.bsModalRef = this.modalService.show(UpdateFieldComponent, {
            initialState: {
                plugin: this.plugin,
                create: true,
                dataField: {}
            }
        });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.modalService.onHide.subscribe(() => {
            this.initPluginInfo(this.plugin.id);
        });
    }

    /**
     * 编辑字段弹窗
     * @param fieldItem fieldItem
     */
    modifyField(fieldItem: DataFieldModel) {
        this.bsModalRef = this.modalService.show(UpdateFieldComponent, {
            initialState: {
                plugin: this.plugin,
                create: false,
                dataField: fieldItem
            }
        });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.modalService.onHide.subscribe(() => {
            this.initPluginInfo(this.plugin.id);
        });
    }

    /**
     * 删除字段
     * @param fieldItem fieldItem
     */
    deleteField(fieldItem: DataFieldModel) {
        this.plugin.meta.dataFields.forEach((value, index, array) => {
            if (value.name === fieldItem.name) {
                array.splice(index, 1);
            }
        });
        this.pluginService.updatePlugin(this.plugin, value => {
            this.initPluginInfo(this.plugin.id);
        });
    }
}
