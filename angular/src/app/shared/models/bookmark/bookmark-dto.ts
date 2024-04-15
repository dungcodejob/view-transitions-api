import { BaseDto } from "../base-dto";
import { IdentityType } from "../identity-type";

export interface BookmarkDto extends BaseDto {
  readonly url: string;
  readonly domain: string;
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly favicon: string;
  readonly note: string;
  readonly collectionId: string;
  readonly tagIds: IdentityType[];
}

export type BookmarkToAdd = Omit<BookmarkDto, keyof BaseDto>;
export type BookmarkToUpdate = BookmarkToAdd & { id: BookmarkDto["id"] };
export type BookmarkToDelete = BookmarkDto["id"];
