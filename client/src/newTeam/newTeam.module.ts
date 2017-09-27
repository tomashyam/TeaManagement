import angular from 'angular';
import {NewTeamComponent} from "./newTeam.directive";


export default angular.module('app.newTeam', [])
    .component('newTeam', new NewTeamComponent())
    .name;