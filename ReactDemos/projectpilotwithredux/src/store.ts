import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { initialProjectState } from "./projects/state/projectReducer";
import { type ProjectState } from "./projects/state/projectTypes";
import { projectReducer } from "./projects/state/projectReducer";


const rootReducer = combineReducers({
  // Add your reducers here
  projectState: projectReducer
});

export type AppState = {projectState: ProjectState};

export const initialAppState: AppState = {
  projectState: initialProjectState
};

//create the store using redux toolkit
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: {}
});