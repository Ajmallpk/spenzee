import type { AuthRole } from '../types/auth.types'

interface RoleToggleProps {
  role: AuthRole
  onChange: (role: AuthRole) => void
  disabled?: boolean
}

export const RoleToggle = ({ role, onChange, disabled = false }: RoleToggleProps) => {
  return (
    <div
      role="group"
      aria-label="Account Type"
      className="flex items-center gap-2 mb-6"
    >
      {/* USER TAB */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange('user')}
        className={`px-6 sm:px-7 py-2 text-xs font-black tracking-widest uppercase rounded-sm transition-all duration-200 cursor-pointer ${
          role === 'user'
            ? 'bg-[#f7f8f6] text-[#0b1914] shadow-sm ring-1 ring-white/20'
            : 'bg-transparent text-emerald-200/60 border border-emerald-800/50 hover:text-white hover:border-[#68b991]'
        }`}
      >
        USER
      </button>

      {/* PROVIDER TAB */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange('provider')}
        className={`px-6 sm:px-7 py-2 text-xs font-black tracking-widest uppercase rounded-sm transition-all duration-200 cursor-pointer ${
          role === 'provider'
            ? 'bg-[#f7f8f6] text-[#0b1914] shadow-sm ring-1 ring-white/20'
            : 'bg-transparent text-emerald-200/60 border border-emerald-800/50 hover:text-white hover:border-[#68b991]'
        }`}
      >
        PROVIDER
      </button>
    </div>
  )
}
