import angular from 'angular';
import {ToolbarComponent} from "./toolbar.directive";

export default angular.module('app.toolbar', [])
    .component('toolbar', new ToolbarComponent())
    .name;