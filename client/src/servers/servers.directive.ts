import {IFacadeApiService} from "../Utilities/facadeApi.service";
export class ServersComponent {
    templateUrl = 'servers/servers.html';
    controller = ServersController;
    controllerAs = 'ctrl';
}

export class ServersController {
    static $inject = ['$location', 'FacadeApiService', '$mdDialog'];

    public gridOptions = {
        data: [],
        urlSync: false
    };

    constructor(public $location: any, public FacadeApiService: any, public $mdDialog: any) {
        FacadeApiService.getTeamServers("59cbeea37d9211423cebdf2e").then((result: any) => {
            this.gridOptions.data = result.data;
        }, (error: string) => {

        });
    }

    public showAdvanced(ev : any) {

        this.$mdDialog.show({
            controller: function ($scope : any, $mdDialog : any) {
                $scope.server = {
                    hostname: '',
                    address: '',
                    project: '',
                    environment: '',
                    description: '',
                    OS: '',
                    IsAliveUrl: '',
                    password: ''
                };

                $scope.hide = function () {
                    $mdDialog.hide();
                };

                $scope.cancel = function () {
                    $mdDialog.cancel();
                };

                $scope.answer = function (answer :any) {
                    $mdDialog.hide(answer);
                };
            },
            templateUrl: 'servers/createServer/createServerDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then( (answer : any) => {
                if(answer !== "cancle"){
                    this.FacadeApiService.addTeamServer(answer).then(()=>{
                        alert("yessss");
                    },()=>{});
                }

            }, () => {

            });
    }




}



