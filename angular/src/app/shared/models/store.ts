import { Signal, WritableSignal, signal } from "@angular/core";

export enum CallStatus {
  Loading = "Loading",
  Success = "Success",
  Failure = "Failure",
  Initial = "Initial",
}

type ViewState = {
  status: CallStatus;
  error: string | null;
};

export class Store<T = undefined> {
  private readonly _vm: WritableSignal<ViewState & T>;

  vm: Signal<ViewState & T>;

  constructor(initialState: ViewState & T) {
    this._vm = signal(initialState);
    this.vm = this._vm.asReadonly();
  }

  setStatusLoading() {
    this._vm.update(pre => ({ ...pre, status: CallStatus.Loading }));
  }

  setStatusSuccess(data: T) {
    this._vm.update(pre => ({ ...pre, status: CallStatus.Success, ...data }));
  }

  setStatusFailure(error: string | null = null) {
    this._vm.update(pre => ({ ...pre, status: CallStatus.Failure, error: error }));
  }
}
