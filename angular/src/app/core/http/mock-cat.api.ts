import { Injectable } from "@angular/core";
import { CatDto } from "@shared/models";
import { Observable, of } from "rxjs";
import { ICatApi } from "./cat.api";

@Injectable({ providedIn: "root" })
export class MockCatApi implements ICatApi {
  data = new Map<string, CatDto>();

  constructor() {
    this.data.set("senna", {
      name: "senna",
      image:
        "https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/senna-large.jpg?v=1658763217969",
      thumb:
        "https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/senna-thumb.jpg?v=1658763217087",
      alt: `A black cat standing next to another black cat, who's lying on the floor`,
      description: `<p>Kimi always looks sad or scared, but he isn't.</p>
  <p>He started off as the lighter of the two cats, but he has overcome this through eating too much.</p>
  <p>He once lived up a tree for 6 days.</p>`,
    });

    this.data.set("kimi", {
      name: "kimi",
      image:
        "https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/kimi-large.jpg?v=1658763217382",
      thumb:
        "https://cdn.glitch.global/b2a0e9e8-12a2-4158-b2d8-11ef08ab8d68/kimi-thumb.jpg?v=1658763216756",
      alt: `A black cat hiding under a chimnea`,
      description: `<p>Senna has a pointier face than Kimi, and his meow is much louder.</p>
  <p>Much louder.</p>
  <p>It's annoying.</p>`,
    });
  }

  findAll(): Observable<CatDto[]> {
    return of(Array.from(this.data.values()));
  }

  getByName(catName: string) {
    return this.data.get(catName);
  }
}
