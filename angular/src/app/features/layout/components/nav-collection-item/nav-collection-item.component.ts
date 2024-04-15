import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CollectionDto } from "@shared/models";
import { PadIconModule } from "pad-ui-lib/icon";

@Component({
  selector: "app-nav-collection-item",
  standalone: true,
  imports: [RouterLink, PadIconModule],
  templateUrl: "./nav-collection-item.component.html",
  styleUrls: ["./nav-collection-item.component.scss"],
})
export class NavCollectionItemComponent {
  @Input({ required: true }) link!: string;
  @Input({ required: true }) data!: CollectionDto;
}
