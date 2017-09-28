
export class ServersComponent {
    templateUrl = 'servers/servers.html';
    controller = ServersController;
    controllerAs = 'ctrl';
}

export class ServersController {
    static $inject = ['$location'];

    constructor(public $location: any) {

    }

    public gridOptions = {
        data: [{
            "statusDisplay": "Valid",
            "hostname": "AS66",
            "address": "128.0.0.1",
            "project" : "SouthPark",
            "environment" : "prod",
            "username" : "Administrator",
            "password" : "Aa123456",
            "description" : "For my big load cache",
            "OS" : "Linux",
            "IsAliveUrl" : "http://localhost/isalive"
        },
            {
                "statusDisplay": "Hold",
                "hostname": "WS66",
                "address": "128.0.0.6",
                "project" : "SouthPark",
                "environment" : "exer",
                "username" : "Administrator",
                "password" : "Aa123456",
                "description" : "For my big load cache",
                "OS" : "Windows",
                "IsAliveUrl" : "http://localhost/isalive"
            }],
        urlSync: false
    };
}



