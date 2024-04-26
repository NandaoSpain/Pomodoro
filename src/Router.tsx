import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.tsx'
import { History } from './pages/History/index.tsx'
import { DefaltLayout } from './layouts/DefaultLauout.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaltLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
