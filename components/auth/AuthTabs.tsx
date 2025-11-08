// components/auth/AuthTabs.tsx
"use client";

import { useState } from "react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export function AuthTabs() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

  return (
    <div className="w-full space-y-6">
      {/* Tab Headers */}
      <div className="flex gap-2 p-1.5 rounded-full bg-slate-800/60 border border-slate-700">
        <button
          onClick={() => setActiveTab("signin")}
          className={`flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === "signin"
              ? "bg-cyan-500 text-slate-900"
              : "text-slate-300 hover:text-slate-100"
          }`}
        >
          🔑 Sign In
        </button>
        <button
          onClick={() => setActiveTab("signup")}
          className={`flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === "signup"
              ? "bg-cyan-500 text-slate-900"
              : "text-slate-300 hover:text-slate-100"
          }`}
        >
          🆕 Create Account
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "signin" ? (
          <SignInForm onSwitchToSignup={() => setActiveTab("signup")} />
        ) : (
          <SignUpForm onSwitchToSignin={() => setActiveTab("signin")} />
        )}
      </div>
    </div>
  );
}

