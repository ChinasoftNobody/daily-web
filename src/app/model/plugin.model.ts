export class PluginModel {
    id?: string;

    name?: string;

    desc?: string;

    type?: string;

    meta?: {
        dataFields: [
            DataFieldModel
            ]
    };
}

export class DataFieldModel {
    name?: string;
    desc?: string;
    type?: string;
    defaultValue?: string;
    required?: boolean;
    validatorType?: string;
    validated?: boolean;
    validateRule?: string;
}
