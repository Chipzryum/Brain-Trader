import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg shadow-glow"></div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Steal a Brainrot
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#marketplace" className="text-sm font-medium hover:text-neon-cyan transition-colors">
            Marketplace
          </a>
          <a href="#create" className="text-sm font-medium hover:text-neon-cyan transition-colors">
            Create Trade
          </a>
          <a href="#about" className="text-sm font-medium hover:text-neon-cyan transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => window.location.href = '/auth'}>
            Sign In
          </Button>
          <Button variant="neon" size="sm" onClick={() => window.location.href = '/auth'}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;