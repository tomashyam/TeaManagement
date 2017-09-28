import {IIdentityService} from '../Utilities/identityService';

export class TeamSelectorComponent {
    templateUrl = 'teamSelector/teamSelector.html';
    controller = TeamSelectorController;
    controllerAs = 'vm';
}

export class TeamSelectorController {

    static $inject = ['IdentityService'];

    constructor(public IdentityService: IIdentityService) {

    }

    public teams = [{
        name: "תור בינה"
    }, {
        name: "פייטלאב"
    }];

    public onTeamSelect(team: any): void {
        this.IdentityService.currentTeam = team;
    }

}


