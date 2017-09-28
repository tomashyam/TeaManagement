export class NewUserComponent  {
    templateUrl = '/newUser/newUser.template.html';
    controller= NewUserController;
    controllerAs= 'vm';

}

export class NewUserController {
    private name: string;
    private teamId: string;
    private mail: string;

    static $inject = ['FacadeApiService', '$location'];
    constructor(private FacadeApiService: any, private $location: any) {


    }

    public createUser(): void  {
        this.FacadeApiService.addNewUser({name: this.name, teamid: this.teamId, mail: this.mail}).then((result: any) => {

        }, (error : string) => {

        });
    };
}