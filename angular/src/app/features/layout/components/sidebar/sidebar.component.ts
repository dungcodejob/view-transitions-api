import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  signal,
} from "@angular/core";

import { NgFor } from "@angular/common";

import { CollectionDto } from "@shared/models";
import { PadIconModule } from "pad-ui-lib/icon";
import { NavCollectionItemComponent } from "../nav-collection-item/nav-collection-item.component";
import { NavItemComponent, NavItemDetail } from "../nav-item/nav-item.component";

type NavItem<T = NavItemDetail> = { link: string; detail: T };

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, NavItemComponent, NavCollectionItemComponent, PadIconModule],
  providers: [],
})
export class SidebarComponent implements OnInit {
  navCollectionItems: Signal<NavItem<CollectionDto>[]> = signal([]);

  navItems = signal<NavItem[]>([
    {
      detail: {
        iconKey: "layers-three",
        text: "Inbox",
        key: Symbol(),
      },
      link: "",
    },
    {
      detail: {
        iconKey: "bell",
        text: "Activity",
        key: Symbol(),
      },
      link: "",
    },
    {
      detail: {
        iconKey: "settings",
        text: "Settings",
        key: Symbol(),
      },
      link: "",
    },
  ]);

  ngOnInit(): void {}

  onLogout(): void {}
}
