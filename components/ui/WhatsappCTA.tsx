"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function WhatsappCTA() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show the chat bubble after 4 seconds
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Bizvelo%20Technology%2C%20I%20would%20like%20to%20request%20a%20free%20demo%2Fconsultation%20for%20my%20business.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Dynamic Pop-up Bubble */}
      {showBubble && (
        <div className="glass-panel text-slate-100 p-4 rounded-xl shadow-2xl max-w-[260px] relative border border-slate-700/60 animate-fade-in-up flex flex-col gap-2">
          <button 
            onClick={() => setShowBubble(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Close bubble"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Online Support</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Need a billing demo or a website quote? Chat with our engineers in Trichy right now!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowBubble(false)}
            className="text-[11px] font-medium text-center bg-emerald-600 hover:bg-emerald-500 text-white py-1.5 px-3 rounded-lg transition-colors duration-200 mt-1"
          >
            Start WhatsApp Chat
          </a>
        </div>
      )}

      {/* Floating Circular CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Customized SVG for WhatsApp */}
        <svg 
          className="w-7 h-7 fill-white transition-transform duration-300 group-hover:rotate-12"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.459 5.416 1.46 5.538 0 10.043-4.507 10.046-10.048.002-2.686-1.037-5.212-2.93-7.105C17.229 1.569 14.708.527 12.01.527c-5.541 0-10.048 4.509-10.05 10.052-.001 1.84.482 3.631 1.4 5.2l-.326 1.192.356-.356.761-.758z" />
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004z" />
        </svg>
      </a>
    </div>
  );
}
