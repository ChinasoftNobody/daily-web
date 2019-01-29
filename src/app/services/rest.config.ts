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
            }
        }, path(key: string) {
            return this.domain + '://' + this.name + '/daily' + this.interfaces[key].path;
        }
    }
;
