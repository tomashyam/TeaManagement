import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import ngRoute from 'angular-route';
import 'angular-data-grid/dist/dataGrid';
import 'angular-data-grid/dist/pagination';

import Sample from '../sample/sample.module'
import TeamSelector from '../teamSelector/teamSelector.module'
import Toolbar from '../toolbar/toolbar.module'
import Sidenav from '../sidenav/sidenav.module'
import Servers from '../servers/servers.module'

import {AppDataService} from '../Utilities/appData.service'

import angularMaterial from 'angular-material';

var application = angular.module('app',  [
    ngRoute,
    angularMaterial,
    Sample,
    TeamSelector,
    Toolbar,
    Sidenav,
    Servers,
    'dataGrid', 'pagination'
 ]);

application.service('AppDataService', AppDataService);

application.config(function($routeProvider : ng.route.IRouteProvider) : void {
    $routeProvider
        .when("/", {
            template : "<team-selector></team-selector>"
        })
        .when("/Teams", {
            template : "<team-selector></team-selector>"
        })
        .when("/Servers", {
            template : "<servers></servers>"
        });
});
