import { TimeGreeting } from "@/components/features/time-greeting";
import { LiveStatus } from "@/components/features/live-status";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for collaboration
          </div>
          
          <TimeGreeting />
          
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              I build digital organisms. My work lives at the edge of 
              <span className="text-foreground font-medium"> calm intensity</span> and 
              <span className="text-foreground font-medium"> radical curiosity</span>—treating every commit as a hypothesis and every deployment as an evolution.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
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
