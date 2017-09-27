import angular from 'angular';
import {SidenavComponent} from "./sidenav.directive";

export default angular.module('app.sidenav', [])
    .component('sidenav', new SidenavComponent())
    .name;