
import {IFacadeApiService} from "../Utilities/facadeApi.service";
export class ServersComponent {
    templateUrl = 'servers/servers.html';
    controller = ServersController;
    controllerAs = 'ctrl';
}

export class ServersController {
    static $inject = ['$location', 'FacadeApiService'];

    public gridOptions = {
        data: [],
        urlSync: false
    };

    constructor(public $location: any, FacadeApiService: any) {
        FacadeApiService.getTeamServers("59cbeea37d9211423cebdf2e").then((result: any) => {
            this.gridOptions.data = result.data;
        }, (error : string) => {

        });
    }
}



