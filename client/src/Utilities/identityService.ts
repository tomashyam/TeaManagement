export interface IIdentityService  {
    currentUser: any;
    currentTeam: any;
}
export class IdentityService implements IIdentityService {
    public currentUser : any;
    public currentTeam : any;
}