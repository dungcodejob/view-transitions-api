import { TitleCasePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from "@angular/core";
import { ActivatedRouteSnapshot, RouterLink } from "@angular/router";
import { CatApi, MockCatApi } from "@core/http";
import { CurrentTransitionService } from "@core/services";
import { CatDto } from "@shared/models";

@Component({
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: "./cat-view.component.html",
  styleUrl: "./cat-view.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    [
      {
        provide: CatApi,
        useClass: MockCatApi,
      },
    ],
  ],
})
export class CatViewComponent implements OnInit {
  private readonly _catApi = inject(CatApi);
  private readonly _transitionService = inject(CurrentTransitionService);
  cats = signal<CatDto[]>([]);

  constructor() {}
  ngOnInit(): void {
    this._catApi.findAll().subscribe(data => {
      this.cats.set(data);
    });
  }

  viewTransitionName(cat: CatDto) {
    const transition = this._transitionService.currentTransition();
    // If we're transitioning to or from the cat's detail page, add the `banner-image` transition name.
    // This allows the browser to animate between the specific cat image from the list and its image on the detail page.

    const to = transition ? this.getDeepestChildSnapshot(transition.to) : undefined;

    const from = transition ? this.getDeepestChildSnapshot(transition.from) : undefined;

    const isBannerImg =
      to?.params["name"] === cat.name || from?.params["name"] === cat.name;
    return isBannerImg ? "banner-img" : "";
  }

  getDeepestChildSnapshot(snapshot: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let deepestChild = snapshot.firstChild;
    while (deepestChild?.firstChild != null) {
      deepestChild = deepestChild.firstChild;
    }
    return deepestChild || snapshot;
  }
}
