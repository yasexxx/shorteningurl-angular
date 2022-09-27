import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResponseLink } from "../interfaces/response-link";


export const selectLink = createFeatureSelector<ResponseLink>('linkApp');

