// Generated by CoffeeScript 1.7.1
(function() {
  var libs;

  libs = ['angular', '../app', 'services/api'];

  define(libs, function(angular, app) {
    var project;
    project = function(api) {
      return {
        restrict: 'E',
        scope: {
          model: '='
        },
        replace: true,
        templateUrl: '/_/views/_project.html',
        link: function(scope, elem, attrs) {
          console.log('fuck', scope);
          scope.isActive = function() {
            var _ref;
            return ((_ref = scope.$root.currentProject) != null ? _ref.path : void 0) === scope.model.path;
          };
          scope.select = function() {
            return scope.$root.currentProject = scope.model;
          };
          return scope.remove = function($event) {
            console.log(api);
            api.project.remove(scope.model.path).then(function() {
              return scope.$root.listProjects();
            });
            $event.preventDefault();
            return $event.stopPropagation();
          };
        }
      };
    };
    return app.directive('project', project);
  });

}).call(this);