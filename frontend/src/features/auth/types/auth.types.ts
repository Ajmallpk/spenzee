export type AuthMode = 'login' | 'signup'

export type AuthRole = 'user' | 'provider' | 'admin'

export interface AuthStat {
  value: string
  label: string
}

export interface AuthFeature {
  title: string
  description: string
}

export interface AuthPageProps {
  role?: AuthRole
  initialMode?: AuthMode
  portalTitle?: string
  bannerImage?:
    | string
    | {
        login?: string
        signup?: string
      }
  headline?: {
    login?: string
    signup?: string
  }
  subheadline?: {
    login?: string
    signup?: string
  }
  tagline?: string
  stats?: AuthStat[]
  features?: AuthFeature[]
  showSocialLogin?: boolean
  showStats?: boolean
  onLoginSubmit?: (data: LoginFormData) => void | Promise<void>
  onSignupSubmit?: (data: SignupFormData) => void | Promise<void>
  onForgotPasswordClick?: () => void
  redirectPathOnSuccess?: string
}

export interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
  role: AuthRole
}

export interface SignupFormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  agreeTerms: boolean
  role: AuthRole
}
