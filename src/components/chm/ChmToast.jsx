import React from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function ChmToast() {
  const { toast } = useChm();

  if (!toast) return null;

  const isError = toast.type === 'error';
  const isInfo = toast.type === 'info';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-sm font-semibold border ${
          isError
            ? 'bg-red-950/95 text-red-100 border-red-800'
            : isInfo
            ? 'bg-slate-900/95 text-white border-slate-700'
            : 'bg-emerald-950/95 text-emerald-100 border-emerald-800'
        }`}
      >
        {isError ? (
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
        ) : isInfo ? (
          <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        )}
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
