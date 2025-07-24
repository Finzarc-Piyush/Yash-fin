import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-8 bg-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Zap className="h-6 w-6" />
          <span className="font-manrope text-lg font-bold uppercase tracking-widest">
            AI-APPS
          </span>
        </div>
        
        <div className="text-center md:text-right">
          <p className="font-manrope text-sm text-white/60 mb-2">
            Transform Your Business with Premium Solutions
          </p>
          <div className="flex flex-col md:flex-row gap-2 text-xs text-white/50">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-[#e66465] transition">AI-APPS Automate</a></li>
              <li><a href="#" className="text-white hover:text-[#e66465] transition">AI-APPS WebCraft</a></li>
              <li><a href="#" className="text-white hover:text-[#e66465] transition">AI-APPS DataScience</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 