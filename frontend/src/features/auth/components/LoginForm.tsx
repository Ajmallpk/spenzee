import { useState, type FormEvent } from 'react'
import { Mail, ArrowRight, Loader2 } from 'lucide-react'
import { PasswordInput } from './PasswordInput'
import type { AuthRole, LoginFormData } from '../types/auth.types'

interface LoginFormProps {
  role?: AuthRole
  portalTitle?: string
  onSubmit?: (data: LoginFormData) => void | Promise<void>
  onSwitchToSignup?: () => void
  onForgotPasswordClick?: () => void
  showSocialLogin?: boolean
  disabled?: boolean
}

export const LoginForm = ({
  role = 'user',
  portalTitle,
  onSubmit,
  onSwitchToSignup,
  onForgotPasswordClick,
  showSocialLogin = true,
  disabled = false,
}: LoginFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [isLoading, setIsLoading] = useState(false)

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {}
    if (!email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    try {
      if (onSubmit) {
        await onSubmit({ email, password, rememberMe, role })
      } else {
        // Fallback demo simulation
        await new Promise((resolve) => setTimeout(resolve, 800))
        alert(`Welcome back! Logged in as ${email} (${role})`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const getRoleLabel = () => {
    if (portalTitle) return portalTitle
    if (role === 'provider') return 'Partner Login'
    if (role === 'admin') return 'Admin Login'
    return 'User Login'
  }

  return (
    <div id="auth-login-panel" className="w-full">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {getRoleLabel()}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Sign in to access your personalized {role === 'provider' ? 'provider console' : 'spending intelligence'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Email Field */}
        <div className="space-y-1.5">
          <label
            htmlFor="login-email"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            EMAIL ADDRESS
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <Mail className="h-4 w-4" />
            </div>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
              }}
              placeholder="you@example.com"
              disabled={disabled || isLoading}
              className={`w-full rounded-xl border bg-slate-50/70 py-2.5 pl-10 pr-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 outline-none
                ${
                  errors.email
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/20'
                    : 'border-slate-200 hover:border-slate-300 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-600/10'
                }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs font-medium text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <PasswordInput
          id="login-password"
          label="PASSWORD"
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
          }}
          placeholder="Enter your password"
          error={errors.password}
          disabled={disabled || isLoading}
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-emerald-800 focus:ring-emerald-700 accent-emerald-800 cursor-pointer"
            />
            <span className="text-xs text-slate-600 font-medium">Remember me</span>
          </label>

          <button
            type="button"
            onClick={onForgotPasswordClick}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:underline transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={disabled || isLoading}
          className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[#083329] py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#05231c] hover:shadow-md active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        {/* Google Social Login */}
        {showSocialLogin && (
          <>
            <div className="relative my-4 flex items-center justify-center">
              <div className="w-full border-t border-slate-200" />
              <span className="absolute bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                OR CONTINUE WITH
              </span>
            </div>

            <button
              type="button"
              disabled={disabled || isLoading}
              onClick={() => alert('Google authentication connected.')}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  fill="#EA4335"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>
          </>
        )}

        {/* Switch to Signup */}
        <div className="pt-2 text-center text-xs text-slate-500">
          <span>Don&apos;t have an account? </span>
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="font-bold text-slate-900 hover:text-emerald-700 hover:underline transition-colors cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
