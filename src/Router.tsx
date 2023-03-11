import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { CompleteOrder } from './pages/CompleteOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
      </Route>
    </Routes>
  )
}
