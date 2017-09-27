import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';

import Sample from '../sample/sample.module';
import Team from '../team/team.module';
import NewUser from '../newUser/newUser.module';
import NewTeam from '../newTeam/newTeam.module';

import angularMaterial from 'angular-material';

angular.module('app', [
    angularMaterial,


    // My modules:
    Sample,
    Team,
    NewUser,
    NewTeam
]);