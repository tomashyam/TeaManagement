import {IIdentityService} from '../Utilities/identityService';
import {IFacadeApiService} from '../Utilities/facadeApi.service';

export class TeamSelectorComponent {
    templateUrl = 'teamSelector/teamSelector.html';
    controller = TeamSelectorController;
    controllerAs = 'vm';
}

export class TeamSelectorController {

    public teams;

    static $inject = ['FacadeApiService','IdentityService', '$location'];

    constructor(private FacadeApiService: IFacadeApiService,public IdentityService: IIdentityService, public $location: any) {
        FacadeApiService.getAllTeams().then((result: any) => {
            this.teams = result.data;
        });
    }

    public onTeamSelect(team: any): void {
        this.IdentityService.setCurrentTeam(team);
        this.$location.url("/Team");
    }

    public onAddTeam(): void {
        this.$location.url("/AddTeam");
    }
}


