import angular from 'angular';
import {NewUserComponent} from "./newUser.directive";


export default angular.module('app.newUser', [])
    .component('newUser', new NewUserComponent())
    .name;