import {createStore} from 'redux';
import { city } from './../reducers/city';
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Le tuve que pasar un estado inicial obligatoriamente porque me devolvia un error al no tener este valor city
const initialState = { city: 'Resistencia,ar' };

export const store = createStore(city, initialState, reduxExtension);