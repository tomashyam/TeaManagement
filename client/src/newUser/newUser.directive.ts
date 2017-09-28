import {IIdentityService} from "../Utilities/identityService";
export class NewUserComponent  {
    templateUrl = '/newUser/newUser.template.html';
    controller= NewUserController;
    controllerAs= 'vm';

}

export class NewUserController {
    private name: string;
    private teamId: string;
    private mail: string;

    static $inject = ['FacadeApiService', 'IdentityService' ,'$location'];
    constructor(private FacadeApiService: any,private IdentityService :IIdentityService, private $location: any) {


    }

    public createUser(): void  {

        this.FacadeApiService.addNewUser({name: this.name, teamid: this.IdentityService.currentTeam._id, mail: this.mail}).then((result: any) => {

        }, (error : string) => {

        });
    };
}