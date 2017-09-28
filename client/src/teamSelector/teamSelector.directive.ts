import {IIdentityService} from '../Utilities/identityService';

export class TeamSelectorComponent {
    templateUrl = 'teamSelector/teamSelector.html';
    controller = TeamSelectorController;
    controllerAs = 'vm';
}

export class TeamSelectorController {

    static $inject = ['IdentityService', '$location'];

    constructor(public IdentityService: IIdentityService, public $location: any) {

    }

    public teams = [{
        _id: 1,
        name: "תור בינה",
        members: [{
            Name: "משה",
            Id: "moshe",
            Mail: "A@gmail.com"
        },
            {
                Name: "משה",
                Id: "moshe",
                Mail: "A@gmail.com"
            }
        ]
    }, {
        _id: 2,
        name: "פייטלאב",
        members: [{
            Name: "משה",
            Id: "moshe",
            Mail: "A@gmail.com"
        }]
    }];

    public onTeamSelect(team: any): void {
        this.IdentityService.currentTeam = team;
        this.$location.url("/Team");
    }

}


