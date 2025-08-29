import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import CreateTradeForm from "@/components/CreateTradeForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        {/* Create Trade Section */}
        <section id="create" className="py-16 px-4 bg-game-surface">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Create Your Trade
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Post your items and find the perfect trading partner. It's quick, easy, and secure.
              </p>
            </div>
            <CreateTradeForm />
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
                <h3 className="text-xl font-bold text-neon-cyan">Secure Trading</h3>
                <p className="text-muted-foreground">
                  Advanced security measures to protect your items and personal information.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto shadow-glow"></div>
                <h3 className="text-xl font-bold text-neon-purple">Fast Matching</h3>
                <p className="text-muted-foreground">
                  Smart algorithms to find the perfect trading partners for your items.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto shadow-glow"></div>
                <h3 className="text-xl font-bold text-neon-pink">Community Driven</h3>
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
              <a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Contact</a>
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