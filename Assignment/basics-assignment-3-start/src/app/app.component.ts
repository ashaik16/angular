import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  secretPassword = "tuna";
  toggle = false;
  count = 0;
  output = [];
  onToggle() {
    this.toggle = !this.toggle;
    this.output.push(this.count++);
  }
}
