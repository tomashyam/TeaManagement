import angular from 'angular';
import {SampleComponent} from "./sample.directive";


export default angular.module('app.sample', [])
    .component('sample', new SampleComponent())
    .name;