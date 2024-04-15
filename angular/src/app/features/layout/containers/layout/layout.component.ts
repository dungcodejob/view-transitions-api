import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

import { SidebarComponent } from "@layout/components/sidebar/sidebar.component";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  standalone: true,
  imports: [RouterOutlet, RouterLink, SidebarComponent],
})
export class LayoutComponent {
  router = inject(Router);
}
