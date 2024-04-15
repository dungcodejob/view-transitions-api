import { inject } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { map } from "rxjs";

// type RouterState = {
//   collectionId: string;
// };

export class RouterStore {
  static getCollectionId = () => this.getPathParam(param => param.get("collectionId"));

  static getPathParam(fn: (param: ParamMap) => any) {
    const route = inject(ActivatedRoute);
    return route.paramMap.pipe(map(fn));
  }
}
