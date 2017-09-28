/**
 * Created by hack on 28/09/2017.
 */
import angular from 'angular';
import { userDisplay} from "./user.directive"

export default angular.module('app.userDisplay',[])
    .component('user', new userDisplay()).name;