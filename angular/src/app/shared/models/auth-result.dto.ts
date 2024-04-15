import { UserProfileDto } from "./user-profile-dto";

export type TokenDto = {
  access: string;
  refresh: string;
};

export interface AuthResultDto {
  user: UserProfileDto;
  token: TokenDto;
}
