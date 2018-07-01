import { createStore } from "redux";
import reducer from "../Reducers";

const initialState = { tech: "React " };
export const store = createStore(reducer, initialState);