import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
          Trade Your Way to Victory
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The ultimate marketplace for Steal a Brainrot items. Create trades, find what you need, and dominate the game.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="lg" className="min-w-[200px] bg-gradient-primary hover:opacity-90">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px]">
            Browse Marketplace
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gamer-teal">1,234</div>
            <div className="text-sm text-muted-foreground">Active Trades</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gamer-purple">5,678</div>
            <div className="text-sm text-muted-foreground">Happy Traders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gamer-orange">99.9%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;