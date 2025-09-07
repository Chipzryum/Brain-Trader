import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Search, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getAllBrainRots, searchBrainRots, getRarities, availableTraits, type BrainRot } from "@/utils/brainrotData";

interface TradeItem extends BrainRot {
  traits?: string[];
  mutation?: string;
}

const CreateTradeForm = () => {
  const [offering, setOffering] = useState<TradeItem[]>([]);
  const [requesting, setRequesting] = useState<TradeItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [rarityFilter, setRarityFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"offering" | "requesting">("offering");
  const { toast } = useToast();

  const availableMutations = ["Gold", "Diamond", "Rainbow", "Lava", "Bloodrot", "Celestial", "Candy", "Galaxy"];

  const searchResults = searchBrainRots(searchQuery, rarityFilter === "all" ? undefined : rarityFilter);

  const addBrainRot = (brainRot: BrainRot) => {
    const newItem: TradeItem = { ...brainRot };
    
    if (activeTab === "offering") {
      if (!offering.find(item => item.id === brainRot.id)) {
        setOffering([...offering, newItem]);
      }
    } else {
      if (!requesting.find(item => item.id === brainRot.id)) {
        setRequesting([...requesting, newItem]);
      }
    }
    setSearchQuery("");
  };

  const addAnyItemToRequest = () => {
    const anyItem: TradeItem = {
      id: `any-${Date.now()}`,
      name: "any",
      displayName: "Any Item",
      rarity: "Varies",
      imagePath: "/Images/Question.png",
    };
    setRequesting([...requesting, anyItem]);
  };

  const addAnyItemToOffering = () => {
    const anyItem: TradeItem = {
      id: `any-${Date.now()}`,
      name: "any",
      displayName: "Any Item",
      rarity: "Varies",
      imagePath: "/Images/Question.png",
    };
    setOffering([...offering, anyItem]);
  };

  const removeOffering = (itemId: string) => {
    setOffering(offering.filter(item => item.id !== itemId));
  };

  const removeRequesting = (itemId: string) => {
    setRequesting(requesting.filter(item => item.id !== itemId));
  };

  const updateItemTraits = (itemId: string, traits: string[], type: "offering" | "requesting") => {
    if (type === "offering") {
      setOffering(offering.map(item => item.id === itemId ? { ...item, traits } : item));
    } else {
      setRequesting(requesting.map(item => item.id === itemId ? { ...item, traits } : item));
    }
  };

  const updateItemMutation = (itemId: string, mutation: string, type: "offering" | "requesting") => {
    if (type === "offering") {
      setOffering(offering.map(item => item.id === itemId ? { ...item, mutation } : item));
    } else {
      setRequesting(requesting.map(item => item.id === itemId ? { ...item, mutation } : item));
    }
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
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="bg-gradient-primary hover:opacity-80 transition-opacity" size="lg">
          <Plus className="w-4 h-4 mr-2" />
          Create Trade
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-3xl bg-card border-border overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-center">Create New Trade</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Tab Selector */}
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={activeTab === "offering" ? "default" : "ghost"}
              onClick={() => setActiveTab("offering")}
              className="flex-1"
            >
              Items You're Offering ({offering.length})
            </Button>
            <Button
              variant={activeTab === "requesting" ? "default" : "ghost"}
              onClick={() => setActiveTab("requesting")}
              className="flex-1"
            >
              Items You Want ({requesting.length})
            </Button>
          </div>

          {/* Search Section */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search Brain Rots..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={rarityFilter} onValueChange={setRarityFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  {getRarities().map(rarity => (
                    <SelectItem key={rarity} value={rarity}>{rarity}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div className="max-h-48 overflow-y-auto border border-border rounded-lg">
                {searchResults.slice(0, 10).map((brainRot) => (
                  <div
                    key={brainRot.id}
                    className="flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer border-b border-border last:border-b-0"
                    onClick={() => addBrainRot(brainRot)}
                  >
                    <img
                      src={brainRot.imagePath}
                      alt={brainRot.displayName}
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{brainRot.displayName}</p>
                      <Badge variant="secondary" className="text-xs">{brainRot.rarity}</Badge>
                    </div>
                  </div>
                ))}
                {searchResults.length === 0 && (
                  <div className="p-4 text-center text-muted-foreground">No results found</div>
                )}
              </div>
            )}
          </div>

          {/* Selected Items */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                {activeTab === "offering" ? "Your Offering" : "Your Requests"}
              </h3>
              <Button variant="outline" size="sm" onClick={activeTab === 'offering' ? addAnyItemToOffering : addAnyItemToRequest}>
                <Plus className="w-full bg-gradient-primary hover:opacity-80 transition-opacity" />
                Offer
              </Button>
            </div>
            
            <div className="space-y-3">
              {(activeTab === "offering" ? offering : requesting).map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={item.imagePath}
                      alt={item.displayName}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{item.displayName}</h4>
                          <Badge variant="secondary">{item.rarity}</Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => activeTab === "offering" ? removeOffering(item.id) : removeRequesting(item.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      {/* Traits Selector */}
                      {item.rarity !== "Varies" && (
                        <div>
                          <Label className="text-sm text-muted-foreground">Traits (optional)</Label>
                          <div className="grid grid-cols-9 gap-1 p-2 border border-border rounded-md mt-1">
                            {availableTraits.map(trait => (
                              <button
                                key={trait.name}
                                onClick={() => {
                                  const currentTraits = item.traits || [];
                                  const newTraits = currentTraits.includes(trait.name)
                                    ? currentTraits.filter(t => t !== trait.name)
                                    : [...currentTraits, trait.name];
                                  updateItemTraits(item.id, newTraits, activeTab);
                                }}
                                className={`aspect-square rounded border-2 transition-all flex flex-col items-center justify-center text-xs p-1 ${
                                  item.traits?.includes(trait.name)
                                    ? "border-primary bg-primary/10 text-primary"
                                    : "border-border hover:border-primary/50"
                                }`}
                                title={trait.name}
                              >
                                <img
                                  src={trait.img}
                                  alt={trait.name}
                                  className="w-5 h-5 mb-1 object-contain"
                                />
                                <span className="text-[10px] leading-tight text-center">{trait.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Mutation Selector */}
                      {item.rarity !== "Varies" && (
                        <div>
                          <Label className="text-sm text-muted-foreground">Mutation (optional)</Label>
                          <Select
                            value={item.mutation || ""}
                            onValueChange={(value) => updateItemMutation(item.id, value, activeTab)}
                          >
                            <SelectTrigger className="w-full mt-1">
                              <SelectValue placeholder="Select mutation" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No mutation</SelectItem>
                              {availableMutations.map(mutation => (
                                <SelectItem key={mutation} value={mutation}>{mutation}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
              
              {(activeTab === "offering" ? offering : requesting).length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No items added yet. Search and select Brain Rots above.
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-primary hover:opacity-80 transition-opacity"
            size="lg"
            disabled={offering.length === 0 || requesting.length === 0}
          >
            Create Trade
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTradeForm;