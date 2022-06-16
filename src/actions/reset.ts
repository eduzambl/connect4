export interface ResetAction {
  type: "RESET";
}

export function reset() {
  return {
    type: "RESET",
  };
}
