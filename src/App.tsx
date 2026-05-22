import { Routes, Route, Navigate } from 'react-router-dom'
import { TrixieShell } from './components/TrixieShell'
import { Dashboard } from './pages/Dashboard'
import { Pipeline } from './pages/Pipeline'
import { Projects } from './pages/Projects'
import { Studio } from './pages/Studio'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <TrixieShell activeApp="dashboard" activeSection="dashboard">
            <Dashboard />
          </TrixieShell>
        }
      />
      <Route
        path="/pipeline"
        element={
          <TrixieShell activeApp="crm" activeSection="pipeline">
            <Pipeline />
          </TrixieShell>
        }
      />
      <Route
        path="/projects"
        element={
          <TrixieShell activeApp="pm" activeSection="projects">
            <Projects />
          </TrixieShell>
        }
      />
      <Route
        path="/studio"
        element={
          <TrixieShell activeApp="content-studio" activeSection="studio">
            <Studio />
          </TrixieShell>
        }
      />
      <Route
        path="*"
        element={
          <TrixieShell activeApp="dashboard" activeSection="dashboard">
            <Dashboard />
          </TrixieShell>
        }
      />
    </Routes>
  )
}
