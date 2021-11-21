import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import farmsReducer from './farms'
import poolsReducer from './pools'
import transactions from './transactions/reducer'

// const store = configureStore({
//   devTools: process.env.NODE_ENV !== 'production',
//   reducer: {
//     farms: farmsReducer,
//     pools: poolsReducer,

//     // Exchange
//     user,
//     transactions,
//     swap,
//     mint,
//     burn,
//     multicall,
//     lists,
//   },
//   middleware: [...getDefaultMiddleware({ thunk: true }), save({ states: PERSISTED_KEYS })],
//   preloadedState: load({ states: PERSISTED_KEYS }),
// })

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    pools: poolsReducer,
    transactions,
  },
})

export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export type AppDispatch = typeof store.dispatch
export default store