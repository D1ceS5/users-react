import {configureStore} from '@reduxjs/toolkit'
import reducers from "./Reducers/index";

import thunk from "redux-thunk";

export const store = configureStore({
        reducer:reducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
