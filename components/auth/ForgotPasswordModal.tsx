// components/auth/ForgotPasswordModal.tsx
"use client";

import { useState } from "react";

interface ForgotPasswordModalProps {
  onClose: () => void;
}

export function ForgotPasswordModal({ onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend password reset API
    console.log("Password reset for:", email);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold text-slate-50 mb-2">
                Reset Your Password
              </h2>
              <p className="text-sm text-slate-400">
                Enter your email address and we'll send you a secure reset link.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-slate-800/60 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"
                  placeholder="you@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white hover:from-cyan-600 hover:to-indigo-700 transition-all shadow-lg"
              >
                Send Reset Link
              </button>
            </form>

            {/* Info */}
            <p className="text-xs text-slate-500 text-center">
              The reset link will expire in 15 minutes for security reasons.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
            {/* Success Icon */}
            <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Message */}
            <div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">
                Check Your Inbox
              </h3>
              <p className="text-sm text-slate-400 max-w-sm">
                We've sent a password reset link to <strong className="text-slate-200">{email}</strong>
              </p>
            </div>

            {/* Action */}
            <button
              onClick={onClose}
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Return to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

