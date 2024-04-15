import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { MockCatApi } from "@core/http";
import { CatDetailComponent } from "./containers/cat-detail/cat-detail.component";
import { CatViewComponent } from "./containers/cat-view/cat-view.component";

export const catRoutes: Routes = [
  {
    path: "cats",
    component: CatViewComponent,
  },
  {
    path: "cats/:name",
    component: CatDetailComponent,
    resolve: {
      cat: (route: ActivatedRouteSnapshot) => {
        const mockCatApi = inject(MockCatApi);
        return mockCatApi.getByName(route.params["name"]);
      },
    },
  },
];
