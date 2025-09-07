import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { searchBrainRots, getRarities, type BrainRot } from "@/utils/brainrotData";

const BrainRotSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rarityFilter, setRarityFilter] = useState("all");
  
  const results = searchBrainRots(
    searchTerm, 
    rarityFilter === "all" ? undefined : rarityFilter
  );

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-gray-500 text-white";
      case "Rare": return "bg-blue-500 text-white";
      case "Epic": return "bg-purple-500 text-white";
      case "Legendary": return "bg-orange-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Brain Rot Database
        </h1>
        <p className="text-muted-foreground">
          Search through all available brain rots and their rarities
        </p>
      </div>

      {/* Search Controls */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search brain rots..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={rarityFilter} onValueChange={setRarityFilter}>
          <SelectTrigger className="w-48">
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

      {/* Results */}
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Found {results.length} brain rot{results.length !== 1 ? 's' : ''}
        </p>
        
        <div className="grid gap-3">
          {results.map((brainRot) => (
            <Card key={brainRot.id} className="hover:shadow-md transition-all duration-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={brainRot.imagePath}
                      alt={brainRot.displayName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.className += ' flex items-center justify-center bg-muted';
                          parent.innerHTML = '<span class="text-xs text-muted-foreground">No Image</span>';
                        }
                      }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{brainRot.displayName}</h3>
                    <p className="text-sm text-muted-foreground">{brainRot.name}</p>
                  </div>
                  
                  <Badge className={getRarityColor(brainRot.rarity)}>
                    {brainRot.rarity}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {results.length === 0 && searchTerm && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground">
                No brain rots found matching "{searchTerm}"
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BrainRotSearch;