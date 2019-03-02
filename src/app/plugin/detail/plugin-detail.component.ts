import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PluginService} from '../plugin.service';

@Component({
    selector: 'app-plugin-detail-modal',
    templateUrl: './plugin-detail.component.html'
})
export class PluginDetailComponent implements OnInit {
    plugin: {
        name?: string,
        desc?: string,
        type?: string,
        meta?: {
            dataFields: [
                {
                    name: string,
                    desc: string,
                    type: string,
                    defaultValue: string,
                    required: boolean,
                    validatorType: string,
                    validated: boolean,
                    validateRule: string
                }
                ]
        }
    } = {};

    constructor(private pluginService: PluginService,
                private activatedRout: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.initPluginInfo();
    }

    /**
     * 初始化plugin信息
     */
    private initPluginInfo() {
        this.activatedRout.params.subscribe(data => {
            this.pluginService.queryPluginById(data.id, value => {
                this.plugin = value;
            });
        }, error1 => {
            console.error(error1);
        });
    }
}
