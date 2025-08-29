import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreateTradeForm = () => {
  const [offering, setOffering] = useState<string[]>([]);
  const [requesting, setRequesting] = useState<string[]>([]);
  const [offeringInput, setOfferingInput] = useState("");
  const [requestingInput, setRequestingInput] = useState("");
  const { toast } = useToast();

  const addOffering = () => {
    if (offeringInput.trim() && !offering.includes(offeringInput.trim())) {
      setOffering([...offering, offeringInput.trim()]);
      setOfferingInput("");
    }
  };

  const addRequesting = () => {
    if (requestingInput.trim() && !requesting.includes(requestingInput.trim())) {
      setRequesting([...requesting, requestingInput.trim()]);
      setRequestingInput("");
    }
  };

  const removeOffering = (item: string) => {
    setOffering(offering.filter(i => i !== item));
  };

  const removeRequesting = (item: string) => {
    setRequesting(requesting.filter(i => i !== item));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (offering.length === 0 || requesting.length === 0) {
      toast({
        title: "Error",
        description: "Please add at least one item to offer and one item to request.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Trade Created!",
      description: "Your trade has been posted to the marketplace.",
    });
    
    // Reset form
    setOffering([]);
    setRequesting([]);
  };

  return (
    <Card className="bg-gradient-card border-border max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent text-center">
          Create New Trade
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="offering" className="text-neon-cyan font-medium">
              Items You're Offering
            </Label>
            <div className="flex gap-2">
              <Input
                id="offering"
                value={offeringInput}
                onChange={(e) => setOfferingInput(e.target.value)}
                placeholder="Enter item name..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addOffering())}
              />
              <Button type="button" onClick={addOffering} variant="cyber" size="sm">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 min-h-[40px] p-2 border border-border rounded-md bg-game-surface">
              {offering.map((item, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {item}
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-destructive" 
                    onClick={() => removeOffering(item)}
                  />
                </Badge>
              ))}
              {offering.length === 0 && (
                <span className="text-muted-foreground text-sm">No items added yet</span>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="requesting" className="text-neon-pink font-medium">
              Items You're Requesting
            </Label>
            <div className="flex gap-2">
              <Input
                id="requesting"
                value={requestingInput}
                onChange={(e) => setRequestingInput(e.target.value)}
                placeholder="Enter item name..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequesting())}
              />
              <Button type="button" onClick={addRequesting} variant="cyber" size="sm">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 min-h-[40px] p-2 border border-border rounded-md bg-game-surface">
              {requesting.map((item, index) => (
                <Badge key={index} variant="outline" className="flex items-center gap-1 border-neon-pink/30">
                  {item}
                  <X 
                    className="w-3 h-3 cursor-pointer hover:text-destructive" 
                    onClick={() => removeRequesting(item)}
                  />
                </Badge>
              ))}
              {requesting.length === 0 && (
                <span className="text-muted-foreground text-sm">No items added yet</span>
              )}
            </div>
          </div>

          <Button type="submit" variant="neon" size="lg" className="w-full">
            Create Trade
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateTradeForm;