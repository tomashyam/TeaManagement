import angular from 'angular';
import {ServersComponent} from "./servers.directive";

export default angular.module('app.servers', [])
    .component('servers', new ServersComponent())
    .name;