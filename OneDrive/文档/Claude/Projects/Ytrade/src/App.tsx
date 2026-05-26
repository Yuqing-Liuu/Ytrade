import { Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { DashboardPage } from '@/pages/DashboardPage'
import { NewResearchPage } from '@/pages/NewResearchPage'
import { ResearchDetailPage } from '@/pages/ResearchDetailPage'
import { EditResearchPage } from '@/pages/EditResearchPage'

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/research/new" element={<NewResearchPage />} />
        <Route path="/research/:id" element={<ResearchDetailPage />} />
        <Route path="/research/:id/edit" element={<EditResearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  )
}
