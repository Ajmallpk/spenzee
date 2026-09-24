import { useState, useMemo, type FormEvent } from 'react'
import { User, Mail, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react'
import { PasswordInput } from './PasswordInput'
import type { AuthRole, SignupFormData } from '../types/auth.types'

interface SignupFormProps {
  role?: AuthRole
  portalTitle?: string
  onSubmit?: (data: SignupFormData) => void | Promise<void>
  onSwitchToLogin?: () => void
  showSocialLogin?: boolean
  disabled?: boolean
}

export const SignupForm = ({
  role = 'user',
  portalTitle,
  onSubmit,
  onSwitchToLogin,
  showSocialLogin = true,
  disabled = false,
}: SignupFormProps) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState<{
    fullName?: string
    email?: string
    password?: string
    confirmPassword?: string
    agreeTerms?: string
  }>({})

  // Dynamic Password Strength Meter
  const passwordStrength = useMemo(() => {
    if (!password) return { score: 0, label: '', color: 'bg-slate-200' }
    let score = 0
    if (password.length >= 8) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    switch (score) {
      case 1:
        return { score: 25, label: 'Weak', color: 'bg-red-400', textColor: 'text-red-500' }
      case 2:
        return { score: 50, label: 'Fair', color: 'bg-amber-400', textColor: 'text-amber-500' }
      case 3:
        return { score: 75, label: 'Good', color: 'bg-emerald-500', textColor: 'text-emerald-600' }
      case 4:
        return { score: 100, label: 'Strong', color: 'bg-emerald-600', textColor: 'text-emerald-700' }
      default:
        return { score: 10, label: 'Too short', color: 'bg-red-300', textColor: 'text-red-400' }
    }
  }, [password])

  const validate = () => {
    const newErrors: typeof errors = {}

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Minimum 8 characters required'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password'
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = 'You must agree to continue'
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
        await onSubmit({ fullName, email, password, confirmPassword, agreeTerms, role })
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800))
        alert(`Account created successfully for ${fullName}!`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const getRoleLabel = () => {
    if (portalTitle) return portalTitle
    if (role === 'provider') return 'Partner Registration'
    if (role === 'admin') return 'Admin Registration'
    return 'User Registration'
  }

  return (
    <div id="auth-signup-panel" className="w-full">
      <div className="mb-5 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {getRoleLabel()}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Register to unlock intelligent spending analytics & perks
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
        {/* Full Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="signup-name"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            FULL NAME
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <User className="h-4 w-4" />
            </div>
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value)
                if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }))
              }}
              placeholder="Enter your full name"
              disabled={disabled || isLoading}
              className={`w-full rounded-xl border bg-slate-50/70 py-2.5 pl-10 pr-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 outline-none
                ${
                  errors.fullName
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/20'
                    : 'border-slate-200 hover:border-slate-300 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-600/10'
                }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-xs font-medium text-red-500">{errors.fullName}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label
            htmlFor="signup-email"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            EMAIL ADDRESS
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <Mail className="h-4 w-4" />
            </div>
            <input
              id="signup-email"
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

        {/* Password */}
        <div>
          <PasswordInput
            id="signup-password"
            label="PASSWORD"
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
            }}
            placeholder="Min. 8 characters"
            error={errors.password}
            disabled={disabled || isLoading}
          />
          {password && (
            <div className="mt-1.5 space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Security strength:</span>
                <span className={`font-semibold ${passwordStrength.textColor}`}>
                  {passwordStrength.label}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                  style={{ width: `${passwordStrength.score}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-1.5">
          <label
            htmlFor="signup-confirm-password"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            CONFIRM PASSWORD
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <input
              id="signup-confirm-password"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                if (errors.confirmPassword) {
                  setErrors((prev) => ({ ...prev, confirmPassword: undefined }))
                }
              }}
              placeholder="Re-enter your password"
              disabled={disabled || isLoading}
              className={`w-full rounded-xl border bg-slate-50/70 py-2.5 pl-10 pr-3.5 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 outline-none
                ${
                  errors.confirmPassword
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/20'
                    : 'border-slate-200 hover:border-slate-300 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-600/10'
                }`}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-xs font-medium text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Agree to terms */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked)
                if (errors.agreeTerms) setErrors((prev) => ({ ...prev, agreeTerms: undefined }))
              }}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-800 focus:ring-emerald-700 accent-emerald-800 cursor-pointer"
            />
            <span className="text-xs text-slate-600 leading-snug">
              I agree to the{' '}
              <a href="#terms" className="font-semibold text-emerald-800 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#privacy" className="font-semibold text-emerald-800 hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-xs font-medium text-red-500 mt-1">{errors.agreeTerms}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={disabled || isLoading}
          className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[#083329] py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#05231c] hover:shadow-md active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
              <span>Creating your account...</span>
            </>
          ) : (
            <>
              <span>Register Account</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        {/* Social Signup */}
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
              onClick={() => alert('Google registration connected.')}
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
            <span>Sign up with Google</span>
          </button>
        </>
        )}

        {/* Switch to Login */}
        <div className="pt-2 text-center text-xs text-slate-500">
          <span>Already have an account? </span>
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="font-bold text-slate-900 hover:text-emerald-700 hover:underline transition-colors cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
