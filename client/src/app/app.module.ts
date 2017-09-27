import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';

import Sample from '../sample/sample.module'
import TeamSelector from '../teamSelector/teamSelector.module'

import angularMaterial from 'angular-material';

angular.module('app', [
    angularMaterial,


    // My modules:
    Sample,
    TeamSelector
]);