import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TrendingUp, Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation()
  const isNewResearch = location.pathname === '/research/new'

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top navigation */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-slate-900 hover:text-blue-600 transition-colors"
          >
            <TrendingUp className="h-5 w-5 text-blue-600" strokeWidth={2} />
            <span className="font-semibold text-sm tracking-wide">YTrade</span>
            <span className="text-slate-300 text-xs font-normal hidden sm:inline">
              Stock Research
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {!isNewResearch && (
              <Link to="/research/new">
                <Button size="sm" variant="primary">
                  <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
                  New Research
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Page content (offset for fixed header) */}
      <main className="flex-1 pt-14">
        <div className="max-w-6xl mx-auto px-6 py-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center">
          <p className="text-xs text-slate-400">
            YTrade — personal research workspace. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  )
}
