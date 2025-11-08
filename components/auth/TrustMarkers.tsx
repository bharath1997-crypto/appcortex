// components/auth/TrustMarkers.tsx
export function TrustMarkers() {
  const markers = [
    { icon: "🔒", text: "Encrypted by TLS 1.3" },
    { icon: "💳", text: "No card required for Free" },
    { icon: "🌍", text: "GDPR Compliant" },
    { icon: "🛡️", text: "ISO27001 Certified" },
  ];

  return (
    <div className="mt-6 pt-6 border-t border-slate-800">
      <p className="text-xs text-slate-500 mb-3 text-center">
        Security & Compliance
      </p>
      <div className="grid grid-cols-2 gap-3">
        {markers.map((marker, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-xs text-slate-400"
          >
            <span className="text-sm">{marker.icon}</span>
            <span>{marker.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

