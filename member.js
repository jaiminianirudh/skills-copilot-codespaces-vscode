function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'module/skills/views/Member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member:'='
        }
    };
}