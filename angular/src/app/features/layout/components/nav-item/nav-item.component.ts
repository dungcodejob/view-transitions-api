import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PadIconModule } from "pad-ui-lib/icon";

export interface NavItemDetail {
  key: string | symbol;
  text: string;
  iconKey: string;
}

@Component({
  selector: "app-nav-item",
  standalone: true,
  imports: [RouterLink, PadIconModule],
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.scss"],
})
export class NavItemComponent {
  @Input({ required: true }) link!: string;
  @Input({ required: true }) data!: NavItemDetail;
}
