import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Zap className="h-6 w-6 text-white" />
          <span className="font-manrope text-lg font-bold uppercase tracking-widest text-white">
            AI-APPS
          </span>
        </div>
        
        <div className="text-center md:text-right">
          <p className="font-manrope text-sm text-white/80 mb-2">
            Transform Your Business with Premium Solutions
          </p>
          <div className="flex flex-col md:flex-row gap-2 text-xs">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors duration-300">AI-APPS Automate</a></li>
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors duration-300">AI-APPS WebCraft</a></li>
              <li><a href="#" className="text-white/70 hover:text-teal transition-colors duration-300">AI-APPS DataScience</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 