import { TimeGreeting } from "@/components/features/time-greeting";
import { LiveStatus } from "@/components/features/live-status";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between max-w-2xl">
              <TimeGreeting />
            </div>
            
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 pb-4">
              Naksh<br className="md:hidden" /> Prajapati
            </h1>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to work
            </div>
          </div>
          
          <div className="max-w-2xl space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              I build digital organisms. My work lives at the edge of 
              <span className="text-foreground font-medium"> calm intensity</span> and 
              <span className="text-foreground font-medium"> radical curiosity</span>—treating every commit as a hypothesis and every deployment as an evolution.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/work"
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/signal"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Live Status Grid */}
        <div className="pt-12 border-t border-white/5">
          <h2 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
            Live Telemetry
          </h2>
          <LiveStatus />
        </div>
      </div>
    </div>
  );
}
