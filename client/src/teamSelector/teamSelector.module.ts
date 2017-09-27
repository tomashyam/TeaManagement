import angular from 'angular';
import {TeamSelectorComponent} from "./teamSelector.directive";


export default angular.module('app.teamSelector', [])
    .component('teamSelector', new TeamSelectorComponent())
    .name;