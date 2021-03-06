import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import ngRoute from 'angular-route';
import 'angular-data-grid/dist/dataGrid.js';
import 'angular-data-grid/dist/pagination.js';

import Sample from '../sample/sample.module';
import TeamSelector from '../teamSelector/teamSelector.module';
import Toolbar from '../toolbar/toolbar.module';
import Sidenav from '../sidenav/sidenav.module';
import userDisplay from '../user/user.component'
import Servers from '../servers/servers.module';
import Team from '../team/team.module';
import NewUser from '../newUser/newUser.module';
import NewTeam from '../newTeam/newTeam.module';

import {AppDataService} from '../Utilities/appData.service';
import {IdentityService} from '../Utilities/identityService';
import {FacadeApiService} from '../Utilities/facadeApi.service'
import 'chart.js'


import angularMaterial from 'angular-material';

var application = angular.module('app', [
    ngRoute,
    angularMaterial,
    Sample,
    TeamSelector,
    Toolbar,
    Sidenav,
    Servers,
    userDisplay,
    'dataGrid', 'pagination',
    Team,
    NewUser,
    NewTeam
]);

application.service('AppDataService', AppDataService);
application.service('IdentityService', IdentityService);
application.service('FacadeApiService', FacadeApiService);

application.config(function ($routeProvider: ng.route.IRouteProvider): void {

    $routeProvider
        .when("/", {
            template: "<team-selector></team-selector>"
        })
        .when("/Teams", {
            template: "<team-selector></team-selector>"
        })
        .when("/Team", {
            template: "<team></team>"
        })
        .when("/AddTeam", {
            template: "<new-team></new-team>"
        })
        .when("/AddUser", {
            template: "<new-user></new-user>"
        })
        .when("/Servers", {
            template: "<servers></servers>"
        }).when("/user", {
        template: "<user></user>"
    });
});
