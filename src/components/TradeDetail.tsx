import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send, Star, Flag, MessageCircle } from "lucide-react";

interface Trade {
  id: string;
  trader: string;
  avatar: string;
  offering: string[];
  requesting: string[];
  status: "active" | "completed" | "pending";
  createdAt: string;
}

interface TradeDetailProps {
  trade: Trade;
  onBack: () => void;
}

const TradeDetail = ({ trade, onBack }: TradeDetailProps) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "Sam",
      text: "Is this trade still available?",
      time: "2:30 PM",
      isUser: false
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        sender: "You",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true
      }]);
      setMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Main Trade Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b border-border p-6">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Trades
              </Button>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={trade.avatar} alt={trade.trader} />
                  <AvatarFallback className="text-lg font-bold">
                    {trade.trader.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold">{trade.trader}</h1>
                  <p className="text-muted-foreground">{trade.createdAt}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className={getStatusColor(trade.status)}>
                      {trade.status}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Star className="h-4 w-4 mr-2" />
                  Rate
                </Button>
                <Button variant="destructive" size="sm">
                  <Flag className="h-4 w-4 mr-2" />
                  Report
                </Button>
              </div>
            </div>
          </div>

          {/* Trade Details */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Wants Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-primary">Wants:</h2>
                  <Card className="p-4">
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-3">La Grande Combinasion</h3>
                        <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center border border-border">
                          <img 
                            src="/placeholder.svg" 
                            alt="La Grande Combinasion" 
                            className="w-32 h-32 object-cover rounded"
                          />
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p>Rarity: <span className="text-warning font-medium">Secret</span></p>
                          <p>Mutation: none</p>
                        </div>
                      </div>
                      
                      {/* Additional wanted items grid */}
                      <div className="grid grid-cols-3 gap-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <div 
                            key={index}
                            className="aspect-square bg-muted rounded-lg border border-border flex items-center justify-center"
                          >
                            <span className="text-2xl text-muted-foreground">+</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Giving Section */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-accent">Giving:</h2>
                  <Card className="p-4">
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-3">La Vacca Saturno Saturnito</h3>
                        <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center border border-border">
                          <img 
                            src="/placeholder.svg" 
                            alt="La Vacca Saturno Saturnito" 
                            className="w-32 h-32 object-cover rounded"
                          />
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p>Rarity: <span className="text-primary font-medium">Epic</span></p>
                          <p>Mutation: none</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="aspect-square bg-muted rounded-lg border border-border flex items-center justify-center">
                          <img 
                            src="/placeholder.svg" 
                            alt="Additional item" 
                            className="w-16 h-16 object-cover rounded"
                          />
                        </div>
                        <div className="aspect-square bg-muted rounded-lg border border-border flex items-center justify-center">
                          <span className="text-2xl text-muted-foreground">+</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Request Trade Button */}
              <div className="mt-8 text-center">
                <Button size="lg" className="px-12">
                  Request Trade
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-80 border-l border-border bg-card flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">Chat with {trade.trader}</h3>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {chatMessages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] rounded-lg p-3 ${
                    msg.isUser 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button size="sm" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeDetail;