import { createFeatureSelector } from "@ngrx/store";
import { Appstate } from "./appstate";


export const selectAppstate = createFeatureSelector<Appstate>('appState');
