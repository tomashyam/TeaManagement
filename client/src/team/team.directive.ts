export class TeamComponent  {
    templateUrl = '/team/team.template.html';
    // bindings: {
    //     // Optionals hero: '='
    // },
    controller= TeamController;
    controllerAs= 'vm';

}

export class TeamController {
    public team = {
        name: "תור בינה",
        members: [{
            Name: "משה",
            Id: "moshe",
            Mail: "A@gmail.com"
        }]
    };
}