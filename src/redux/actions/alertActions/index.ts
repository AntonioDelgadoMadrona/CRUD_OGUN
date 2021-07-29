// ACTION / TYPES
import * as types from "./types";
import { IToast } from "./../../../interfaces/IToast";

// SHOW TOAST
export function showToastAction(toast: IToast) {
  return { type: types.SHOW_TOAST, payload: toast };
}

// HIDE TOAST
export function hideToastAction() {
  return { type: types.HIDE_TOAST };
}
