import { forwardRef, useState, type InputHTMLAttributes } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label = 'Password', error, hint, className = '', id, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const inputId = id || `password-input-${Math.random().toString(36).substring(2, 7)}`

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <div className="flex items-center justify-between">
            <label
              htmlFor={inputId}
              className="text-xs font-semibold uppercase tracking-wider text-slate-700"
            >
              {label}
            </label>
            {hint && <span className="text-xs text-slate-400">{hint}</span>}
          </div>
        )}

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
            <Lock className="h-4 w-4" />
          </div>

          <input
            {...props}
            ref={ref}
            id={inputId}
            type={showPassword ? 'text' : 'password'}
            className={`w-full rounded-xl border bg-slate-50/70 py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 outline-none
              ${
                error
                  ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/20'
                  : 'border-slate-200 hover:border-slate-300 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-600/10'
              } ${className}`}
          />

          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>

        {error && <p className="text-xs font-medium text-red-500 mt-1">{error}</p>}
      </div>
    )
  }
)

PasswordInput.displayName = 'PasswordInput'
