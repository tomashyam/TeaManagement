export class AppDataService implements IAppDataService{

    static $inject = ['$mdSidenav'];

    constructor(public $mdSidenav: any){

    }

    public toggleMenu():void {
        this.$mdSidenav('left').toggle();
    }
}

export interface IAppDataService  {
    toggleMenu():void;
}


