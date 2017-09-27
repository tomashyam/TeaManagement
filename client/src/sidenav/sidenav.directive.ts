import {IAppDataService} from '../Utilities/appData.service'

export class SidenavComponent {
    templateUrl = 'sidenav/sidenav.html';
    controller = SidenavController;
    controllerAs = 'ctrl';
}

export class SidenavController {
    static $inject = ['$location'];

    constructor(public $location: any) {

    }

    public goTo(path: String): void {
        this.$location.url(path);
    }
}