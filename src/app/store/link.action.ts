import { createAction, props } from "@ngrx/store";
import { ResponseLink } from "../interfaces/response-link";

export const invokeLinkAPI = createAction(
  '[Link API] Invoke Link Fetch API',
  props<{ code: string | null }>()
);

export const linkFetchAPISuccess = createAction(
  '[Link API] Fetch API Success',
  props<{ responseLink: ResponseLink }>()
);

export const linkFetchAPIError = createAction(
  '[Link API] Fetch API Error',
  props<{ response: any }>()
)

export const invokeCreateLinkAPI = createAction(
  '[Link API] Invoke create new short-link  api',
  props<{ data: { url: string} }>()
);

export const createLinkAPISuccess = createAction(
  '[Link API] Create new short-link api success',
  props<{ newLink: ResponseLink }>()
);

export const resetLinkData = createAction(
  '[Home Comp] Reset link API data',
  props<{reset: boolean}>()
);


