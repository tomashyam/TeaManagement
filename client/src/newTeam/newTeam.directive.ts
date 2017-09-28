export class NewTeamComponent  {
    templateUrl = '/newTeam/newTeam.template.html';
    controller= NewTeamController;
    controllerAs= 'vm';

}

export class NewTeamController {

    private teamName : string;
    private commander : string;
    private department : string;

    static $inject = ['FacadeApiService','IdentityService', '$location'];
    constructor(private FacadeApiService: any, private IdentityService : any, private $location: any) {


    }
    public createTeam(): void {
        var team = {name: this.teamName, commander: this.commander, department: this.department};
        this.FacadeApiService.addNewTeam(team).then((result: any) => {
            this.IdentityService.setCurrentTeam(team);
            this.$location.url("/Team");
        }, (error : string) => {

        });
    }


}