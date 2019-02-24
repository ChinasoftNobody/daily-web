import {environment} from '../../environments/environment';

export class InterfaceInfo {
    path: string;
    method?: 'GET' | 'POST' = 'POST';
}

export class ServerInfo {
    name: string;
    domain: string;
    interfaces: { [interfaceKey: string]: InterfaceInfo };

    path(key: string) {
        return this.domain + this.interfaces[key].path;
    }
}

export const daily_server: ServerInfo = {
        name: environment.daily_server, domain: 'http',
        interfaces: {
            'verifyUserInfo': {
                path: '/user/verify'
            },
            'queryFromLib': {
                path: '/book/queryFromLib'
            },
            'queryLocalBooks': {
                path: '/book/query'
            },
            'moduleFindAll': {
                path: '/module/findAll'
            },
            'createModule': {
                path: '/module/create'
            }
        }, path(key: string) {
            return this.domain + '://' + this.name + '/daily' + this.interfaces[key].path;
        }
    }
;
