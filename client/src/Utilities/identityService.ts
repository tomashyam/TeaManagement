import {IFacadeApiService} from "./facadeApi.service";
export interface IIdentityService {
    currentUser: any;
    currentTeam: any;
    setCurrentTeam(team: any): void;
}
export class IdentityService implements IIdentityService {
    public currentUser: any;
    public currentTeam: any;

    static $inject = ['FacadeApiService'];

    constructor(public FacadeApiService: IFacadeApiService) {
    }

    public setCurrentTeam(team: any): void {
        this.currentUser = null;
        this.currentTeam = team;
        this.FacadeApiService.getTeamMembers(team._id).then((result: any) => {
            this.currentTeam.members = result.data;
        });
    }

}