import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from '@/features/landing'
import { AuthPage, ForgotPasswordPage } from '@/features/auth'

function App() {
  return (
    <Routes>
      {/* Landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* User Auth Routes */}
      <Route path="/auth" element={<AuthPage role="user" initialMode="login" />} />
      <Route path="/login" element={<AuthPage role="user" initialMode="login" />} />
      <Route path="/signup" element={<AuthPage role="user" initialMode="signup" />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Provider Auth Routes (Reusable showcase) */}
      <Route
        path="/provider/login"
        element={<AuthPage role="provider" initialMode="login" portalTitle="Partner Login" />}
      />
      <Route
        path="/provider/signup"
        element={<AuthPage role="provider" initialMode="signup" portalTitle="Partner Registration" />}
      />

      {/* Admin Auth Routes (Reusable showcase) */}
      <Route
        path="/admin/login"
        element={
          <AuthPage
            role="admin"
            initialMode="login"
            portalTitle="Admin Portal"
            showSocialLogin={false}
          />
        }
      />

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App