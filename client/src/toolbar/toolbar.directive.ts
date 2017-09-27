import {IAppDataService} from '../Utilities/appData.service'

export class ToolbarComponent {
    templateUrl = 'toolbar/toolbar.html';
    controller= ToolbarController;
    controllerAs = 'ctrl';
}

export class ToolbarController {
    static $inject = ['AppDataService'];

    constructor(public AppDataService: IAppDataService){

    }

    public toggleMenu():void {
        this.AppDataService.toggleMenu();
    }
}