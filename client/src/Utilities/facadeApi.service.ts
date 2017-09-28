export class FacadeApiService implements IFacadeApiService {
    static $inject = ["$http"];

    constructor(private $http: any) {
    }

    private getUserSessionsRoute = 'http://localhost:3000/applicationSessions/getByUserId';
    private getTeamServersRoute = 'http://localhost:3000/servers';
    private getAllTeamsRoute = 'http://localhost:3000/teams/getAll';
    private addTeamRoute = 'http://localhost:3000/teams/add';
    private addUserRoute = 'http://localhost:3000/users/add';
    private getTeamMembersRoute = 'http://localhost:3000/teams/members';

    private urlBase = '/api/customers';

    public getUserSessions(userId: string): ng.IPromise<any> {
        return this.$http.get(this.getUserSessionsRoute + '/' + userId);
    };

    public getTeamServers(teamId: string): ng.IPromise<any> {
        return this.$http.get(this.getTeamServersRoute + '/' + teamId);
    };

    public getAllTeams(): ng.IPromise<any> {
        return this.$http.get(this.getAllTeamsRoute);
    };

    public addNewTeam(team): ng.IPromise<string> {
        return this.$http.post(this.addTeamRoute, team);
    };

    public addNewUser(user): ng.IPromise<string> {
        return this.$http.post(this.addUserRoute, user);
    };

    public getTeamMembers(teamId): ng.IPromise<any> {
        return this.$http.get(this.getTeamMembersRoute + '/' + teamId);
    };
}

export interface IFacadeApiService {
    getUserSessions(userId: string): ng.IPromise<any>;
    getTeamServers(teamId: string): ng.IPromise<any>;
    getAllTeams(): ng.IPromise<any> ;
    addNewTeam(team): ng.IPromise<string> ;
    addNewUser(user): ng.IPromise<string>;
    getTeamMembers(teamId: string): ng.IPromise<any>;
}
