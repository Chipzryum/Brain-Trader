import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TradeCardProps {
  id: string;
  trader: string;
  offering: string[];
  requesting: string[];
  status: "active" | "completed" | "pending";
  createdAt: string;
}

const TradeCard = ({ trader, offering, requesting, status, createdAt }: TradeCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-neon-cyan text-background";
      case "completed": return "bg-neon-purple text-background";
      case "pending": return "bg-neon-pink text-background";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="bg-gradient-card border-border hover:border-neon-purple/50 transition-all duration-300 hover:shadow-card group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">
            {trader}
          </CardTitle>
          <Badge className={getStatusColor(status)}>
            {status}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{createdAt}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-neon-cyan">Offering:</h4>
          <div className="flex flex-wrap gap-1">
            {offering.map((item, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-neon-pink">Requesting:</h4>
          <div className="flex flex-wrap gap-1">
            {requesting.map((item, index) => (
              <Badge key={index} variant="outline" className="text-xs border-neon-pink/30">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-3">
        <div className="flex gap-2 w-full">
          <Button variant="trade" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="cyber" size="sm" className="flex-1">
            Message Trader
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TradeCard;