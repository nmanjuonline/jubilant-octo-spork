import { Route, Routes } from 'react-router-dom'
import AppShell from './app/AppShell'
import CoursePage from './features/course/CoursePage'
import HomePage from './features/home/HomePage'
import LogisticsPage from './features/logistics/LogisticsPage'
import PlanPage from './features/plan/PlanPage'
import ResultsPage from './features/results/ResultsPage'
import SettingsPage from './features/settings/SettingsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="plan" element={<PlanPage />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="race-morning" element={<LogisticsPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
