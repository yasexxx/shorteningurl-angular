import { createFeatureSelector } from "@ngrx/store";
import { Appstate } from "./appState";


export const selectAppstate = createFeatureSelector<Appstate>('appState');
