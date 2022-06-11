export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";

interface LoadingStart {
    type: typeof LOADING_START;
}

interface LoadingEnd {
    type: typeof LOADING_END;
}

export type TodoDispatchType = LoadingStart | LoadingEnd