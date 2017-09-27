import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import ngRoute from 'angular-route';

import Sample from '../sample/sample.module'
import TeamSelector from '../teamSelector/teamSelector.module'
import Toolbar from '../toolbar/toolbar.module'

import {AppDataService} from '../Utilities/appData.service'

import angularMaterial from 'angular-material';

var application = angular.module('app',  [
    ngRoute,
    angularMaterial,
    Sample,
    TeamSelector,
    Toolbar
 ]);

application.service('AppDataService', AppDataService);

application.config(function($routeProvider : ng.route.IRouteProvider) : void {
    $routeProvider
        .when("/", {
            template : "<team-selector></team-selector>"
        })
        .when("/Teams", {
            template : "<team-selector></team-selector>"
        });
});