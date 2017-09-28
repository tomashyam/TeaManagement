import {IIdentityService} from '../Utilities/identityService';

export class TeamComponent  {
    templateUrl = '/team/team.template.html';
    controller= TeamController;
    controllerAs= 'vm';
}

export class TeamController {

    static $inject = ['IdentityService','$location'];

    constructor(public IdentityService: IIdentityService, public $location:any) {

    }

    public onUserSelect(member: any): void {
        this.IdentityService.currentUser = member;
    }

    public onAddUser(): void {
        this.$location.url("/AddUser");
    }
}