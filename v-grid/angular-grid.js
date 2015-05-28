var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var AngularGrid = (function () {
    function AngularGrid() {
        this.users = [];
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    var results = JSON.parse(xhr.responseText).results;
                    _this.users = results.map(function (o, i) { o.user.index = i; return o.user; });
                }
            }
        };
        xhr.open("GET", "http://api.randomuser.me/?results=25", true);
        xhr.send();
    }
    AngularGrid.prototype.select = function (event) {
        var grid = event.srcElement;
        this.selected = this.users[grid.selection.selected()[0]];
    };
    AngularGrid = __decorate([
        angular2_1.Component({
            selector: 'angular-grid'
        }),
        angular2_1.View({
            templateUrl: 'angular-grid.html',
            directives: [angular2_1.For, angular2_1.If]
        })
    ], AngularGrid);
    return AngularGrid;
})();
exports.AngularGrid = AngularGrid;
angular2_1.bootstrap(AngularGrid);
