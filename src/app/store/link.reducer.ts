import { createReducer, on } from "@ngrx/store";
import { ResponseLink } from "../interfaces/response-link";
import { createLinkAPISuccess, linkFetchAPIError, linkFetchAPISuccess, resetLinkData } from "./link.action";


export const initialState: Readonly<ResponseLink> = ({
  data: undefined
});

export const linkReducer = createReducer(
  initialState,
  on(linkFetchAPISuccess, (state, { responseLink }) =>{
    return responseLink;
  }),
  on(linkFetchAPIError, (state, { response }) => {
    return {data: undefined, error: response.error}
  }),
  on(createLinkAPISuccess, (state, { newLink }) => {
    return newLink;
  }),
  on(resetLinkData, (state, { reset }) => {
    if (!reset) return {...state};
    return { data: undefined, error: undefined }
  })
);
