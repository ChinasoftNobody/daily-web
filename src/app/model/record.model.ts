import {PluginModel} from './plugin.model';
import {BaseModel} from './base.model';

export class RecordModel extends BaseModel {
    plugin?: PluginModel;
    module?: any;
    data?: Map<string, any>[];
    owner?: any;
}
