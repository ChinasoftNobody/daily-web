import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {PluginService} from '../../plugin.service';
import {DataFieldModel, PluginModel} from '../../../model/plugin.model';

@Component({
    selector: 'app-plugin-update-field-modal',
    templateUrl: './update-field.component.html'
})
export class UpdateFieldComponent implements OnInit {
    plugin: PluginModel = {};
    create: boolean;
    dataField: DataFieldModel;
    fieldType = [];
    validatorType = [];

    constructor(public bsModalRef: BsModalRef,
                private pluginService: PluginService) {
    }

    ngOnInit(): void {
        this.initFieldType();
        this.initValidateType();
    }

    /**
     * 保存整个plugin信息
     */
    updateField() {
        if (this.create) {
            this.plugin.meta.dataFields.push(this.dataField);
        } else {
            this.plugin.meta.dataFields.forEach((value, index, array) => {
                if (this.dataField.name === value.name) {
                    array[index] = this.dataField;
                }
            });
        }
        this.pluginService.updatePlugin(this.plugin, value => {
            this.bsModalRef.hide();
        });
    }

    /**
     * 初始化字段类型
     */
    private initFieldType() {
        this.pluginService.queryFieldType(value => {
            this.fieldType = value;
        });
    }

    /**
     * 初始化验证类型
     */
    private initValidateType() {
        this.pluginService.queryValidatorType(value => {
            this.validatorType = value;
        });
    }
}
