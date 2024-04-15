import { TitleCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CatDto } from "@shared/models";

@Component({
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: "./cat-detail.component.html",
  styleUrl: "./cat-detail.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatDetailComponent {
  @Input() cat!: CatDto;
}
