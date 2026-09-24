import authBgSignin from '@/assets/authbgsingin.png'
import authBgSignup from '@/assets/authsingupbg.png'
import forgotPasswordBg from '@/assets/forgotpassword.png'
import defaultHeroImg from '@/assets/auth-hero.jpg'

export { forgotPasswordBg }

export interface RoleAuthImages {
  login: string
  signup: string
}

/**
 * Centralized authentication background images configuration.
 * You can easily swap or update images for any role here at any time.
 */
export const AUTH_ROLE_IMAGES: Record<string, RoleAuthImages> = {
  user: {
    login: authBgSignin,
    signup: authBgSignup,
  },
  provider: {
    // Will be updated when provider images are provided
    login: defaultHeroImg,
    signup: defaultHeroImg,
  },
  admin: {
    // Will be updated when admin images are provided
    login: defaultHeroImg,
    signup: defaultHeroImg,
  },
}

/**
 * Helper to get the auth image for a given role and mode.
 */
export const getAuthImage = (role: string = 'user', mode: 'login' | 'signup' = 'login'): string => {
  const roleConfig = AUTH_ROLE_IMAGES[role] || AUTH_ROLE_IMAGES.user
  return roleConfig[mode] || defaultHeroImg
}
