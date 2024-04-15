import { BaseDto } from "./base-dto";

export interface CollectionDto extends BaseDto {
  readonly title: string;
  readonly icon: string;
}

export type CollectionToAdd = Omit<CollectionDto, keyof BaseDto>;
export type CollectionToUpdate = Omit<CollectionDto, keyof BaseDto>;
export type CollectionToDelete = CollectionDto["id"];
