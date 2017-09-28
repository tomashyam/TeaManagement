export class FacadeApiService implements IFacadeApiService {
    static $inject = ["$http"]

    constructor(private $http: any) {
    }

    private getUserSessionsRoute = 'http://localhost:3000/applicationSessions/getByUserId';
    private getTeamServersRoute = 'http://localhost:3000/servers';
    //     ('/users', users);
    // app.use('/applicationSessions', applicationSessions);
    // app.use('/servers', serversRoute);
    // app.use('/teams', teamsRout);

    private urlBase = '/api/customers';

    // public getCustomers = function () {
    //     return this.$http.get(this.urlBase);
    // };

    public getUserSessions(userId: string): ng.IPromise<any> {
        return this.$http.get(this.getUserSessionsRoute + '/' + userId);
    };

    public getTeamServers(teamId: string): ng.IPromise<any> {
        return this.$http.get(this.getTeamServersRoute + '/' + teamId);
    };

    // public insertCustomer = function (cust) {
    //     return this.$http.post(this.urlBase, cust);
    // };
    //
    // public updateCustomer = function (cust) {
    //     return this.$http.put(this.urlBase + '/' + cust.ID, cust)
    // };
    //
    // public deleteCustomer = function (id) {
    //     return this.$http.delete(this.urlBase + '/' + id);
    // };
    //
    // public getOrders = function (id) {
    //     return this.$http.get(this.urlBase + '/' + id + '/orders');
    // };
}

export interface IFacadeApiService {
    getUserSessions(userId: string): ng.IPromise<any>;
    getTeamServers(teamId: string): ng.IPromise<any>;
}
