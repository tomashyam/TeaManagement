import {IAppDataService} from '../Utilities/appData.service'
import {IIdentityService} from "../Utilities/identityService";

export class ToolbarComponent {
    templateUrl = 'toolbar/toolbar.html';
    controller= ToolbarController;
    controllerAs = 'ctrl';
}

export class ToolbarController {
    static $inject = ['AppDataService'];

    constructor(public AppDataService: IAppDataService, public IdentityService: IIdentityService){

    }

    public toggleMenu():void {
        this.AppDataService.toggleMenu();
    }
}