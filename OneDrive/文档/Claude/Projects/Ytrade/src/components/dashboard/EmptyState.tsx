import { Link } from 'react-router-dom'
import { BookOpen, Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-4">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
        <BookOpen className="h-7 w-7 text-blue-500" strokeWidth={1.5} />
      </div>

      <h2 className="text-lg font-semibold text-slate-800 mb-2">
        No research yet
      </h2>
      <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-7">
        Start building your research library. Add a company you want to study
        and work through the structured template.
      </p>

      <Link to="/research/new">
        <Button size="md" variant="primary">
          <Plus className="h-4 w-4" strokeWidth={2.5} />
          Start your first research
        </Button>
      </Link>
    </div>
  )
}
