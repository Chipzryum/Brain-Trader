import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import ExampleTrade from "@/components/ExampleTrade";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero with Example Trade */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Example Trade */}
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 text-gamer-purple">Live Trade Example</h2>
                  <p className="text-muted-foreground">See how trades work on our platform</p>
                </div>
                <Card className="p-6 bg-game-surface border-border">
                  <ExampleTrade />
                </Card>
              </div>
              
              {/* Right side - Hero Content */}
              <div className="order-1 lg:order-2">
                <Hero />
              </div>
            </div>
          </div>
        </section>

        <Marketplace />
        
        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-game-surface">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Why Choose Our Platform?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto shadow-glow"></div>
                <h3 className="text-xl font-bold text-gamer-teal">Secure Trading</h3>
                <p className="text-muted-foreground">
                  Advanced security measures to protect your items and personal information.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto shadow-glow"></div>
                <h3 className="text-xl font-bold text-gamer-purple">Fast Matching</h3>
                <p className="text-muted-foreground">
                  Smart algorithms to find the perfect trading partners for your items.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto shadow-glow"></div>
                <h3 className="text-xl font-bold text-gamer-orange">Community Driven</h3>
                <p className="text-muted-foreground">
                  Join thousands of players in the most active Steal a Brainrot trading community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-primary rounded shadow-glow"></div>
              <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                Steal a Brainrot Trading Hub
              </span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-gamer-teal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gamer-teal transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gamer-teal transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center mt-4 text-sm text-muted-foreground">
            © 2024 Steal a Brainrot Trading Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;