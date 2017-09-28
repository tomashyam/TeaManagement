import angular from 'angular';
import {TeamComponent} from "./team.directive";


export default angular.module('app.team', [])
    .component('team', new TeamComponent())
    .name;