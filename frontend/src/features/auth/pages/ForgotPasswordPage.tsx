import { useState, useEffect, useRef, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Eye,
  EyeOff,
  Check,
  X,
  Mail,
  Info,
  Loader2,
  RefreshCw,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react'
import Navbar from '@/features/landing/sections/Navbar/Navbar'
import { forgotPasswordBg } from '../config/authImages'

export type ForgotPasswordStep =
  | 'EMAIL'
  | 'CODE_SENT'
  | 'VERIFY_CODE'
  | 'INVALID_CODE'
  | 'NEW_PASSWORD'
  | 'SUCCESS'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()

  // State Machine
  const [step, setStep] = useState<ForgotPasswordStep>('EMAIL')

  // Form Fields State
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
  const [resendTimer, setResendTimer] = useState(28)
  const [canResend, setCanResend] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Status & Feedback
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{
    email?: string
    otp?: string
    newPassword?: string
    confirmPassword?: string
  }>({})
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // OTP Input Refs
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  // Resend Countdown Timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if ((step === 'VERIFY_CODE' || step === 'CODE_SENT') && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [step, resendTimer])

  // Toast auto-dismiss
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [toastMessage])

  // Progress Bar Helper
  const getStepProgress = () => {
    switch (step) {
      case 'EMAIL':
        return { stepNum: 1, total: 3, percent: '33%', label: 'STEP 1 OF 3' }
      case 'CODE_SENT':
      case 'VERIFY_CODE':
      case 'INVALID_CODE':
        return { stepNum: 2, total: 3, percent: '66%', label: 'STEP 2 OF 3' }
      case 'NEW_PASSWORD':
      case 'SUCCESS':
        return { stepNum: 3, total: 3, percent: '100%', label: 'STEP 3 OF 3' }
    }
  }

  // 1. Submit Email
  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setErrors({ email: 'Email address is required' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrors({ email: 'Please enter a valid email address' })
      return
    }

    setErrors({})
    setIsLoading(true)
    try {
      // Simulate API request to send OTP
      await new Promise((resolve) => setTimeout(resolve, 600))
      setResendTimer(28)
      setCanResend(false)
      setStep('CODE_SENT')
    } finally {
      setIsLoading(false)
    }
  }

  // 2. OTP Handling
  const handleOtpChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return
    const digit = val.slice(-1) // Take only the last entered digit
    const updated = [...otp]
    updated[index] = digit
    setOtp(updated)

    if (errors.otp) setErrors((prev) => ({ ...prev, otp: undefined }))

    // Move to next box if digit entered
    if (digit && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').trim()
    const digits = pasted.replace(/\D/g, '').slice(0, 6)
    if (!digits) return

    const updated = [...otp]
    for (let i = 0; i < 6; i++) {
      updated[i] = digits[i] || ''
    }
    setOtp(updated)

    // Focus last filled box
    const focusIndex = Math.min(digits.length, 5)
    otpRefs.current[focusIndex]?.focus()
  }

  // Verify OTP Action
  const handleVerifyOtp = async (e?: FormEvent) => {
    if (e) e.preventDefault()
    const code = otp.join('')
    if (code.length < 6) {
      setErrors({ otp: 'Please enter all 6 digits of the verification code' })
      return
    }

    setErrors({})
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 700))
      // Demonstration of error state: code '000000' triggers INVALID_CODE
      if (code === '000000') {
        setStep('INVALID_CODE')
        return
      }
      setStep('NEW_PASSWORD')
    } finally {
      setIsLoading(false)
    }
  }

  // Resend Code Action
  const handleResendCode = async () => {
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 600))
      setOtp(['', '', '', '', '', ''])
      setResendTimer(28)
      setCanResend(false)
      setToastMessage('A fresh verification code has been dispatched to your email.')
      setStep('VERIFY_CODE')
      setTimeout(() => otpRefs.current[0]?.focus(), 100)
    } finally {
      setIsLoading(false)
    }
  }

  // 3. Reset Password Action
  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault()
    const newErrors: { newPassword?: string; confirmPassword?: string } = {}

    if (!newPassword) {
      newErrors.newPassword = 'New password is required'
    } else if (newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters long'
    } else if (!/\d/.test(newPassword)) {
      newErrors.newPassword = 'Password must include at least one number'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password'
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStep('SUCCESS')
    } finally {
      setIsLoading(false)
    }
  }

  // Password criteria checker
  const isEightChars = newPassword.length >= 8
  const hasNumber = /\d/.test(newPassword)
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)

  // Dynamic Content configuration for the Left Hero
  const getLeftHeroContent = () => {
    switch (step) {
      case 'EMAIL':
        return {
          eyebrow: 'ACCOUNT RECOVERY',
          headline: (
            <>
              RESET
              <br />
              YOUR
              <br />
              <span className="bg-gradient-to-r from-[#f7f8f6] via-[#dceee4] to-[#68b991] bg-clip-text text-transparent">
                ACCESS.
              </span>
            </>
          ),
          description: "We'll send a secure verification code to your email. Back in seconds.",
        }
      case 'CODE_SENT':
        return {
          eyebrow: 'ACCOUNT RECOVERY',
          headline: (
            <>
              CHECK
              <br />
              YOUR
              <br />
              <span className="bg-gradient-to-r from-[#f7f8f6] via-[#dceee4] to-[#68b991] bg-clip-text text-transparent">
                EMAIL.
              </span>
            </>
          ),
          description: "We've sent a 6-digit verification code to your inbox. Please check your spam folder if unreceived.",
        }
      case 'VERIFY_CODE':
        return {
          eyebrow: 'ACCOUNT RECOVERY',
          headline: (
            <>
              VERIFY
              <br />
              YOUR
              <br />
              <span className="bg-gradient-to-r from-[#f7f8f6] via-[#dceee4] to-[#68b991] bg-clip-text text-transparent">
                IDENTITY.
              </span>
            </>
          ),
          description: "Enter the verification code we've sent to your email to prove ownership of this account.",
        }
      case 'INVALID_CODE':
        return {
          eyebrow: 'ACCOUNT RECOVERY',
          headline: (
            <>
              INVALID
              <br />
              <span className="bg-gradient-to-r from-red-200 via-rose-300 to-red-400 bg-clip-text text-transparent">
                CODE.
              </span>
            </>
          ),
          description: 'The verification code you entered is incorrect or has expired.',
        }
      case 'NEW_PASSWORD':
        return {
          eyebrow: 'ACCOUNT RECOVERY',
          headline: (
            <>
              CREATE
              <br />
              A NEW
              <br />
              <span className="bg-gradient-to-r from-[#f7f8f6] via-[#dceee4] to-[#68b991] bg-clip-text text-transparent">
                PASSWORD.
              </span>
            </>
          ),
          description: 'Your new password must be secure and easy for you to remember.',
        }
      case 'SUCCESS':
        return {
          eyebrow: 'ACCOUNT RECOVERY',
          headline: (
            <>
              YOU'RE
              <br />
              ALL
              <br />
              <span className="bg-gradient-to-r from-[#f7f8f6] via-[#dceee4] to-[#68b991] bg-clip-text text-transparent">
                SET!
              </span>
            </>
          ),
          description: 'Your password has been successfully reset. You can now access your account with your new credentials.',
        }
    }
  }

  const heroContent = getLeftHeroContent()
  const progress = getStepProgress()

  return (
    <div className="relative min-h-screen w-full bg-[#08120e] text-[#f7f8f6] selection:bg-[#68b991] selection:text-[#0b1914] overflow-x-hidden font-sans">
      {/* 1. REUSED NAVBAR (TRANSPARENT GLASS ON AUTH) */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <Navbar transparent />
      </div>

      {/* 2. FULL VIEWPORT BACKGROUND: src/assets/forgotpassword.png */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={forgotPasswordBg}
          alt="Forgot Password Background"
          className="h-full w-full object-cover object-center"
        />
        {/* Soft Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-[#08120e]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08120e] via-transparent to-[#08120e]/70" />
      </div>

      {/* 3. AMBIENT EMERALD GLOWS */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-[#104632]/20 blur-[160px]" />
        <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-[#237556]/15 blur-[170px]" />
      </div>

      {/* 4. FLOATING NOTIFICATION TOAST */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#102b1f] border border-[#68b991]/50 text-[#dceee4] px-5 py-3 rounded-lg shadow-xl text-xs sm:text-sm font-medium flex items-center gap-2.5 backdrop-blur-md"
          >
            <CheckCircle2 className="h-4 w-4 text-[#68b991]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. MAIN CONTENT DIRECTLY OVER BACKGROUND CANVAS */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 flex flex-col justify-center px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch w-full">
          
          {/* ================= LEFT COLUMN: DYNAMIC ARCHITECTURAL HERO ================= */}
          <div className="flex flex-col justify-center">
            <div className="relative flex h-full min-h-[580px] w-full flex-col justify-between overflow-hidden p-6 sm:p-10 lg:p-14 select-none">
              {/* Background Vertical Architectural Grid Lines */}
              <div className="pointer-events-none absolute inset-0 grid grid-cols-6 z-0">
                <div className="border-r border-[#68b991]/[0.07] h-full" />
                <div className="border-r border-[#68b991]/[0.07] h-full" />
                <div className="border-r border-[#68b991]/[0.07] h-full" />
                <div className="border-r border-[#68b991]/[0.07] h-full" />
                <div className="border-r border-[#68b991]/[0.07] h-full" />
                <div className="h-full" />
              </div>

              {/* Giant Embossed Watermark "S" in Bottom-Right */}
              <div className="pointer-events-none select-none absolute -bottom-24 -right-10 lg:-right-4 text-[380px] sm:text-[460px] lg:text-[520px] font-bold font-serif leading-none text-[#102b1f]/35 z-0">
                S
              </div>

              {/* Dynamic Headline Area */}
              <div className="relative z-10">
                {/* Pre-label Eyebrow */}
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-10 bg-[#68b991]" />
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#dceee4] uppercase">
                    {heroContent.eyebrow}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 sm:mt-12"
                  >
                    <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#f7f8f6] leading-[0.92]">
                      {heroContent.headline}
                    </h1>

                    <p className="mt-6 sm:mt-8 max-w-sm text-sm sm:text-base text-slate-300/80 leading-relaxed font-normal">
                      {heroContent.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Metrics & Copyright */}
              <div className="relative z-10 mt-12 sm:mt-16">
                <div className="flex items-center gap-6 sm:gap-8 pb-8 border-b border-emerald-900/40">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#f7f8f6]">10K+</p>
                    <p className="text-[10px] font-bold tracking-widest text-[#68b991] uppercase mt-1">
                      USERS
                    </p>
                  </div>
                  <div className="h-8 w-px bg-emerald-800/40" />
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#f7f8f6]">99.9%</p>
                    <p className="text-[10px] font-bold tracking-widest text-[#68b991] uppercase mt-1">
                      UPTIME
                    </p>
                  </div>
                  <div className="h-8 w-px bg-emerald-800/40" />
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#f7f8f6]">4.9★</p>
                    <p className="text-[10px] font-bold tracking-widest text-[#68b991] uppercase mt-1">
                      RATING
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-[10px] font-semibold tracking-widest text-emerald-300/40 uppercase">
                  © 2026 SPENZEE STUDIOS
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: DYNAMIC RECOVERY FORM ================= */}
          <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-8">
            <div className="w-full max-w-md mx-auto">
              
              {/* Top Progress Indicator: STEP X OF 3 */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.25em] text-[#68b991] uppercase mb-2">
                  <span>{progress.label}</span>
                  <span className="text-emerald-300/40">
                    {step === 'EMAIL' && 'EMAIL VERIFICATION'}
                    {(step === 'CODE_SENT' || step === 'VERIFY_CODE' || step === 'INVALID_CODE') && 'IDENTITY CONFIRMATION'}
                    {(step === 'NEW_PASSWORD' || step === 'SUCCESS') && 'SECURITY UPDATE'}
                  </span>
                </div>
                {/* 3-segment progress bars */}
                <div className="grid grid-cols-3 gap-2">
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      progress.stepNum >= 1 ? 'bg-[#68b991]' : 'bg-white/10'
                    }`}
                  />
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      progress.stepNum >= 2 ? 'bg-[#68b991]' : 'bg-white/10'
                    }`}
                  />
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      progress.stepNum >= 3 ? 'bg-[#68b991]' : 'bg-white/10'
                    }`}
                  />
                </div>
              </div>

              {/* Dynamic Step Content */}
              <AnimatePresence mode="wait">
                
                {/* ---------------- STATE 1: EMAIL ---------------- */}
                {step === 'EMAIL' && (
                  <motion.div
                    key="step-email"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                  >
                    <h2 className="text-4xl sm:text-5xl font-black text-[#f7f8f6] uppercase tracking-tight mb-2">
                      FORGOT PASSWORD?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300/80 mb-8 leading-relaxed font-normal">
                      Enter your email address and we'll send you a verification code.
                    </p>

                    <form onSubmit={handleEmailSubmit} noValidate className="space-y-6">
                      <div>
                        <label
                          htmlFor="recovery-email"
                          className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
                        >
                          EMAIL ADDRESS
                        </label>
                        <input
                          id="recovery-email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                          }}
                          placeholder="you@example.com"
                          disabled={isLoading}
                          className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
                        />
                        {errors.email && (
                          <p className="text-xs font-medium text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Primary Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full flex items-center justify-between px-6 py-4 border border-white/80 hover:border-[#68b991] bg-transparent hover:bg-[#68b991] text-[#f7f8f6] hover:text-[#08120e] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                          <span>SEND CODE</span>
                          <div className="flex items-center justify-center">
                            {isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin text-white group-hover:text-[#08120e]" />
                            ) : (
                              <ArrowRight className="h-4 w-4 text-white group-hover:text-[#08120e] transition-transform group-hover:translate-x-1" />
                            )}
                          </div>
                        </button>
                      </div>

                      {/* Bottom / Helper Area */}
                      <div className="flex items-center justify-between pt-8 border-t border-emerald-900/40 text-[10px] font-bold tracking-widest uppercase">
                        <span className="text-emerald-300/40">REMEMBER YOUR PASSWORD?</span>
                        <button
                          type="button"
                          onClick={() => navigate('/login')}
                          className="text-[#68b991] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <span>SIGN IN</span>
                          <span>→</span>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ---------------- STATE 2A: CODE_SENT ---------------- */}
                {step === 'CODE_SENT' && (
                  <motion.div
                    key="step-code-sent"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="text-center sm:text-left"
                  >
                    {/* Glowing Green Mail Badge */}
                    <div className="flex items-center justify-center sm:justify-start mb-6">
                      <div className="h-16 w-16 rounded-full border border-[#68b991]/40 bg-[#102b1f]/60 flex items-center justify-center shadow-[0_0_25px_rgba(104,185,145,0.25)]">
                        <Mail className="h-7 w-7 text-[#68b991]" />
                      </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-[#f7f8f6] uppercase tracking-tight mb-2">
                      CODE SENT!
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300/80 mb-6 leading-relaxed font-normal">
                      We've sent a 6-digit verification code to{' '}
                      <span className="text-[#f7f8f6] font-semibold">{email || 'your email'}</span>.
                    </p>

                    {/* Expiry / Security Note */}
                    <div className="bg-[#0b1c15]/80 border border-emerald-800/40 rounded p-4 mb-8 flex items-start gap-3 text-left">
                      <Info className="h-4 w-4 text-[#68b991] shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-300/90 leading-relaxed">
                        The code will expire in <strong className="text-[#dceee4]">10 minutes</strong> for security reasons. Check your spam folder if it doesn't appear.
                      </p>
                    </div>

                    {/* Primary Button: GO TO OTP */}
                    <button
                      type="button"
                      onClick={() => {
                        setStep('VERIFY_CODE')
                        setTimeout(() => otpRefs.current[0]?.focus(), 100)
                      }}
                      className="w-full flex items-center justify-between px-6 py-4 border border-white/80 hover:border-[#68b991] bg-transparent hover:bg-[#68b991] text-[#f7f8f6] hover:text-[#08120e] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 group cursor-pointer shadow-lg"
                    >
                      <span>GO TO OTP</span>
                      <ArrowRight className="h-4 w-4 text-white group-hover:text-[#08120e] transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Helper Links */}
                    <div className="flex items-center justify-between pt-8 border-t border-emerald-900/40 text-[10px] font-bold tracking-widest uppercase mt-8">
                      <span className="text-emerald-300/40">WRONG EMAIL?</span>
                      <button
                        type="button"
                        onClick={() => setStep('EMAIL')}
                        className="text-[#68b991] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>CHANGE EMAIL</span>
                        <span>→</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ---------------- STATE 2B: VERIFY_CODE ---------------- */}
                {step === 'VERIFY_CODE' && (
                  <motion.div
                    key="step-verify-code"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-black text-[#f7f8f6] uppercase tracking-tight mb-2">
                      ENTER VERIFICATION CODE
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300/80 mb-6 leading-relaxed font-normal">
                      We've sent a 6-digit code to{' '}
                      <span className="text-[#68b991] font-semibold">{email || 'your email'}</span>.
                    </p>

                    <form onSubmit={handleVerifyOtp} noValidate className="space-y-6">
                      {/* 6-digit OTP Inputs */}
                      <div>
                        <label className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-3">
                          6-DIGIT VERIFICATION CODE
                        </label>
                        <div className="flex items-center justify-between gap-2 sm:gap-2.5">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              ref={(el) => {
                                otpRefs.current[index] = el
                              }}
                              type="text"
                              inputMode="numeric"
                              pattern="\d*"
                              maxLength={1}
                              value={digit}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
                              onKeyDown={(e) => handleOtpKeyDown(index, e)}
                              onPaste={index === 0 ? handleOtpPaste : undefined}
                              disabled={isLoading}
                              className={`h-12 w-10 sm:h-14 sm:w-12 text-center text-lg sm:text-xl font-mono font-bold rounded border bg-black/40 transition-all ${
                                digit
                                  ? 'border-[#68b991] text-[#68b991] shadow-[0_0_12px_rgba(104,185,145,0.2)]'
                                  : 'border-emerald-800/60 text-[#f7f8f6] focus:border-[#68b991] focus:ring-1 focus:ring-[#68b991]'
                              } focus:outline-none`}
                            />
                          ))}
                        </div>
                        {errors.otp && (
                          <p className="text-xs font-medium text-red-400 mt-2">{errors.otp}</p>
                        )}
                      </div>

                      {/* Resend Countdown Row */}
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-slate-400">Didn't receive the code?</span>
                        {canResend || resendTimer === 0 ? (
                          <button
                            type="button"
                            onClick={handleResendCode}
                            disabled={isLoading}
                            className="font-bold text-[#68b991] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <RefreshCw className="h-3.5 w-3.5" />
                            <span>Resend Code</span>
                          </button>
                        ) : (
                          <span className="font-mono text-emerald-300/80 font-medium">
                            Resend in 00:{resendTimer < 10 ? `0${resendTimer}` : resendTimer}
                          </span>
                        )}
                      </div>

                      {/* Primary Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full flex items-center justify-between px-6 py-4 border border-white/80 hover:border-[#68b991] bg-transparent hover:bg-[#68b991] text-[#f7f8f6] hover:text-[#08120e] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                          <span>VERIFY CODE</span>
                          <div className="flex items-center justify-center">
                            {isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin text-white group-hover:text-[#08120e]" />
                            ) : (
                              <ArrowRight className="h-4 w-4 text-white group-hover:text-[#08120e] transition-transform group-hover:translate-x-1" />
                            )}
                          </div>
                        </button>
                      </div>

                      {/* Interactive Simulator / Testing Note */}
                      <div className="text-center pt-2">
                        <button
                          type="button"
                          onClick={() => setStep('INVALID_CODE')}
                          className="text-[10px] tracking-wider text-slate-500 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          (Simulate expired/invalid code test)
                        </button>
                      </div>

                      {/* Helper Link */}
                      <div className="flex items-center justify-between pt-6 border-t border-emerald-900/40 text-[10px] font-bold tracking-widest uppercase">
                        <span className="text-emerald-300/40">USE A DIFFERENT EMAIL?</span>
                        <button
                          type="button"
                          onClick={() => setStep('EMAIL')}
                          className="text-[#68b991] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <span>CHANGE EMAIL</span>
                          <span>→</span>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ---------------- STATE 3: INVALID_CODE ---------------- */}
                {step === 'INVALID_CODE' && (
                  <motion.div
                    key="step-invalid-code"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="text-center sm:text-left"
                  >
                    {/* Glowing Red (X) Badge */}
                    <div className="flex items-center justify-center sm:justify-start mb-6">
                      <div className="h-16 w-16 rounded-full border border-red-500/40 bg-red-950/40 flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.25)]">
                        <X className="h-8 w-8 text-red-400" />
                      </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-[#f7f8f6] uppercase tracking-tight mb-2">
                      CODE EXPIRED
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300/80 mb-8 leading-relaxed font-normal">
                      The verification code you entered is invalid or has expired. Please request a new code and try again.
                    </p>

                    {/* Primary Button: RESEND CODE */}
                    <button
                      type="button"
                      onClick={handleResendCode}
                      disabled={isLoading}
                      className="w-full flex items-center justify-between px-6 py-4 border border-white/80 hover:border-[#68b991] bg-transparent hover:bg-[#68b991] text-[#f7f8f6] hover:text-[#08120e] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 group cursor-pointer shadow-lg"
                    >
                      <span>RESEND CODE</span>
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin text-white group-hover:text-[#08120e]" />
                      ) : (
                        <ArrowRight className="h-4 w-4 text-white group-hover:text-[#08120e] transition-transform group-hover:translate-x-1" />
                      )}
                    </button>

                    {/* Helper Link: Go back to email */}
                    <div className="pt-8 border-t border-emerald-900/40 text-[10px] font-bold tracking-widest uppercase mt-8 text-center sm:text-left">
                      <button
                        type="button"
                        onClick={() => setStep('EMAIL')}
                        className="text-[#68b991] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        <span>GO BACK TO EMAIL</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ---------------- STATE 4: NEW_PASSWORD ---------------- */}
                {step === 'NEW_PASSWORD' && (
                  <motion.div
                    key="step-new-password"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-black text-[#f7f8f6] uppercase tracking-tight mb-2">
                      SET A NEW PASSWORD
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300/80 mb-6 leading-relaxed font-normal">
                      Your new password must be secure and easy for you to remember.
                    </p>

                    <form onSubmit={handleResetPassword} noValidate className="space-y-6">
                      {/* New Password Field */}
                      <div>
                        <label
                          htmlFor="new-password"
                          className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
                        >
                          NEW PASSWORD
                        </label>
                        <div className="relative">
                          <input
                            id="new-password"
                            type={showNewPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(e) => {
                              setNewPassword(e.target.value)
                              if (errors.newPassword) setErrors((prev) => ({ ...prev, newPassword: undefined }))
                            }}
                            placeholder="Enter new password"
                            disabled={isLoading}
                            className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 pr-9 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
                          />
                          <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => setShowNewPassword((prev) => !prev)}
                            aria-label={showNewPassword ? 'Hide password' : 'Show password'}
                            className="absolute inset-y-0 right-0 flex items-center pr-1 text-slate-400 hover:text-white transition-colors"
                          >
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                        {errors.newPassword && (
                          <p className="text-xs font-medium text-red-400 mt-1">{errors.newPassword}</p>
                        )}

                        {/* Password Requirements Checklist */}
                        <div className="mt-3 space-y-1.5 text-xs">
                          <div className={`flex items-center gap-2 transition-colors ${isEightChars ? 'text-[#68b991]' : 'text-slate-400'}`}>
                            <Check className={`h-3.5 w-3.5 ${isEightChars ? 'text-[#68b991]' : 'text-slate-500'}`} />
                            <span>At least 8 characters</span>
                          </div>
                          <div className={`flex items-center gap-2 transition-colors ${hasNumber ? 'text-[#68b991]' : 'text-slate-400'}`}>
                            <Check className={`h-3.5 w-3.5 ${hasNumber ? 'text-[#68b991]' : 'text-slate-500'}`} />
                            <span>Include a number</span>
                          </div>
                          <div className={`flex items-center gap-2 transition-colors ${hasSpecial ? 'text-[#68b991]' : 'text-slate-400'}`}>
                            <Check className={`h-3.5 w-3.5 ${hasSpecial ? 'text-[#68b991]' : 'text-slate-500'}`} />
                            <span>Include a special character (optional)</span>
                          </div>
                        </div>
                      </div>

                      {/* Confirm Password Field */}
                      <div>
                        <label
                          htmlFor="confirm-password"
                          className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
                        >
                          CONFIRM PASSWORD
                        </label>
                        <div className="relative">
                          <input
                            id="confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => {
                              setConfirmPassword(e.target.value)
                              if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: undefined }))
                            }}
                            placeholder="Confirm new password"
                            disabled={isLoading}
                            className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 pr-9 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
                          />
                          <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                            className="absolute inset-y-0 right-0 flex items-center pr-1 text-slate-400 hover:text-white transition-colors"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <p className="text-xs font-medium text-red-400 mt-1">{errors.confirmPassword}</p>
                        )}
                      </div>

                      {/* Primary Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full flex items-center justify-between px-6 py-4 border border-white/80 hover:border-[#68b991] bg-transparent hover:bg-[#68b991] text-[#f7f8f6] hover:text-[#08120e] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                          <span>RESET PASSWORD</span>
                          <div className="flex items-center justify-center">
                            {isLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin text-white group-hover:text-[#08120e]" />
                            ) : (
                              <ArrowRight className="h-4 w-4 text-white group-hover:text-[#08120e] transition-transform group-hover:translate-x-1" />
                            )}
                          </div>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ---------------- STATE 5: SUCCESS ---------------- */}
                {step === 'SUCCESS' && (
                  <motion.div
                    key="step-success"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                    className="text-center sm:text-left"
                  >
                    {/* Glowing Green Checkmark Badge */}
                    <div className="flex items-center justify-center sm:justify-start mb-6">
                      <div className="h-16 w-16 rounded-full border border-[#68b991]/50 bg-[#102b1f]/80 flex items-center justify-center shadow-[0_0_30px_rgba(104,185,145,0.35)]">
                        <Check className="h-8 w-8 text-[#68b991]" />
                      </div>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-black text-[#f7f8f6] uppercase tracking-tight mb-2">
                      PASSWORD RESET SUCCESSFUL
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300/80 mb-8 leading-relaxed font-normal">
                      Your password has been successfully reset. You can now sign in with your new password.
                    </p>

                    {/* Primary Button: GO TO SIGN IN */}
                    <button
                      type="button"
                      onClick={() => navigate('/login')}
                      className="w-full flex items-center justify-between px-6 py-4 border border-white/80 hover:border-[#68b991] bg-transparent hover:bg-[#68b991] text-[#f7f8f6] hover:text-[#08120e] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-200 group cursor-pointer shadow-lg"
                    >
                      <span>GO TO SIGN IN</span>
                      <ArrowRight className="h-4 w-4 text-white group-hover:text-[#08120e] transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
export default ForgotPasswordPage
