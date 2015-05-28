import {bootstrap, Component, View, For, If} from 'angular2/angular2';

@Component({
  selector: 'angular-grid'
})
@View({
  templateUrl: 'angular-grid.html',
  directives: [For, If]
})
export class AngularGrid {
  users;
  selected;

  constructor() {
    this.users = [];
    const _this = this;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE ) {
        if(xhr.status == 200){
          var results = JSON.parse(xhr.responseText).results;
          _this.users = results.map((o, i) => {o.user.index = i; return o.user});
        }
      }
    }

    xhr.open("GET", "http://api.randomuser.me/?results=25", true);
    xhr.send();
  }

  select(event) {
    var grid = event.srcElement;
    this.selected = this.users[grid.selection.selected()[0]];
  }
}

bootstrap(AngularGrid);
