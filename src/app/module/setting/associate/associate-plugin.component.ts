import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {PluginService} from '../../../plugin/plugin.service';
import {ModuleService} from '../../../dashboard/module.service';

@Component({
    selector: 'app-associate-plugin-modal',
    templateUrl: './associate-plugin.component.html'
})
export class AssociatePluginComponent implements OnInit {
    constructor(public bsModalRef: BsModalRef,
                private pluginService: PluginService,
                private moduleService: ModuleService) {
    }

    module: any;
    plugins: any[] = [];
    associatePlugins: any[] = [];

    ngOnInit(): void {
        this.initPlugins();
    }

    private initPlugins() {
        this.pluginService.queryPlugins({
            keyword: '', page: 0, size: 100
        }, value => {
            this.plugins = value.content;
            this.plugins.forEach(value1 => {
                this.module.plugins.forEach(value2 => {
                    if (value1.id === value2.id) {
                        this.associatePlugins.push(value2);
                    }
                });
            });
        });
    }

    associate() {
        this.module.plugins = this.associatePlugins;
        this.moduleService.createModule(this.module).subscribe(value => {
            this.bsModalRef.hide();
        }, error1 => {
            console.error(error1);
        });
    }

    selectOrUnSelect(item: any) {
        let push = true;
        this.associatePlugins.forEach((value, index, array) => {
            if (item.id === value.id) {
                array.splice(index, 1);
                push = false;
                return;
            }
        });
        if (push) {
            this.associatePlugins.push(item);
        }
    }

    checkExist(id: string): boolean {
        let flag = false;
        this.associatePlugins.forEach(value => {
            if (id === value.id) {
                flag = true;
                return;
            }
        });
        return flag;
    }
}

