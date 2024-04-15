export interface AppState {
  loading: boolean;
  language: string;
}

export const initialState: AppState = {
  loading: false,
  language: "en",
};
