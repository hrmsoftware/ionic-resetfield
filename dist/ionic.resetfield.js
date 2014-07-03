// Generated by CoffeeScript 1.7.1
(function() {
  angular.module('ionic.resetfield', []).directive('resetField', function($compile, $timeout) {
    return {
      require: 'ngModel',
      scope: {},
      link: function(scope, el, attrs, ctrl) {
        var inputTypes, template;
        inputTypes = /text|search|tel|url|email|password/i;
        if (el[0].nodeName !== 'INPUT') {
          throw new Error("restFieeld is limited to input elements");
        }
        if (!inputTypes.test(attrs.type)) {
          throw new Error("Invalid input type for resetField");
        }
        template = $compile('<i ng-show="enabled" ng-click="reset()" class="icon ion-ios7-close"></i>')(scope);
        el.after(template);
        scope.reset = function() {
          ctrl.$setViewValue(null);
          ctrl.$render();
          return $timeout(function() {
            return el[0].focus();
          }, 0, false);
        };
        return el.bind('input', function() {
          return scope.enabled = !ctrl.$isEmpty(el.val());
        }).bind('focus', function() {
          scope.enabled = !ctrl.$isEmpty(el.val());
          return scope.$apply();
        }).bind('blur', function() {
          scope.enabled = false;
          return scope.$apply();
        });
      }
    };
  });

}).call(this);