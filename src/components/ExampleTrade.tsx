import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

const ExampleTrade = () => {
  return (
    <div className="space-y-6">
      {/* User Profile Section */}
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16 border border-border">
          <AvatarImage src="/placeholder.svg" alt="ChipzRyum" />
          <AvatarFallback className="bg-game-elevated text-lg font-bold">CR</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground">ChipzRyum</h3>
          <div className="flex gap-2 mt-2">
            <Button variant="outline" size="sm">Message</Button>
            <Button variant="outline" size="sm">Rate</Button>
            <Button variant="destructive" size="sm">Report</Button>
          </div>
        </div>
      </div>

      {/* Trade Section */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gamer-purple">Case 1</h4>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Offering Item */}
          <Card className="p-4 bg-game-surface border-border">
            <div className="text-center space-y-3">
              <h5 className="font-bold text-lg">TRALALELO TRALALA</h5>
              <div className="w-full h-48 bg-game-elevated rounded-lg flex items-center justify-center border border-border">
                <img 
                  src="/placeholder.svg" 
                  alt="Trade item" 
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            </div>
          </Card>

          {/* Wanted Items Grid */}
          <div className="space-y-3">
            <h5 className="font-semibold text-gamer-teal">Wants:</h5>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <div 
                  key={index}
                  className="aspect-square bg-game-elevated rounded-lg border border-border flex items-center justify-center hover:bg-game-surface transition-colors cursor-pointer"
                >
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleTrade;