import {IIdentityService} from '../Utilities/identityService';

export class TeamComponent  {
    templateUrl = '/team/team.template.html';
    // bindings: {
    //     // Optionals hero: '='
    // },
    controller= TeamController;
    controllerAs= 'vm';

}

export class TeamController {

    static $inject = ['IdentityService'];

    constructor(public IdentityService: IIdentityService) {

    }

    public onUserSelect(member: any): void {
        this.IdentityService.currentUser = member;
    }

}