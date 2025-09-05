import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import TradeDetail from "@/components/TradeDetail";

interface Trade {
  id: string;
  trader: string;
  avatar: string;
  offering: string[];
  requesting: string[];
  rarity: "Common" | "Rare" | "Epic" | "Legendary" | "Mythic" | "Brainrot God" | "Secret" | "OG";
  status: "active" | "completed" | "pending";
  createdAt: string;
}

const mockTrades: Trade[] = [
  {
    id: "1",
    trader: "ChipzRyum",
    avatar: "/placeholder.svg",
    offering: ["La Vacca Saturno Saturnito", "Rare Hat"],
    requesting: ["La Grande Combinasion", "Epic Sword"],
    rarity: "Epic",
    status: "active",
    createdAt: "2 hours ago"
  },
  {
    id: "2", 
    trader: "SamTheTrader",
    avatar: "/placeholder.svg",
    offering: ["Legendary Shield", "Magic Potion"],
    requesting: ["Dragon Scale", "Fire Crystal"],
    rarity: "Legendary",
    status: "pending",
    createdAt: "5 hours ago"
  },
  {
    id: "3",
    trader: "NoobMaster69",
    avatar: "/placeholder.svg", 
    offering: ["Basic Sword", "Health Potion"],
    requesting: ["Better Armor", "Speed Boost"],
    rarity: "Common",
    status: "active",
    createdAt: "1 day ago"
  }
];

const Trades = () => {
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [rarityFilter, setRarityFilter] = useState("all");
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [mutationFilter, setMutationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const filteredTrades = mockTrades.filter(trade => {
    const matchesSearch = trade.trader.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trade.offering.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         trade.requesting.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRarity = rarityFilter === "all" || trade.rarity === rarityFilter;
    return matchesSearch && matchesRarity;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (selectedTrade) {
    return <TradeDetail trade={selectedTrade} onBack={() => setSelectedTrade(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar with filters */}
        <div className="w-80 border-r border-border bg-card p-6 min-h-screen">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Filters & Search</h2>
              
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search trades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Rarity Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Rarity</label>
              <Select value={rarityFilter} onValueChange={setRarityFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  <SelectItem value="Common">Common</SelectItem>
                  <SelectItem value="Rare">Rare</SelectItem>
                  <SelectItem value="Epic">Epic</SelectItem>
                  <SelectItem value="Legendary">Legendary</SelectItem>
                  <SelectItem value="Mythic">Mythic</SelectItem>
                  <SelectItem value="Brainrot God">Brainrot God</SelectItem>
                  <SelectItem value="Secret">Secret</SelectItem>
                  <SelectItem value="OG">OG</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort Time */}
            <div>
              <label className="text-sm font-medium mb-2 block">Sort Time</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Traits Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Traits</label>
              <div className="grid grid-cols-5 gap-2 p-2 border border-border rounded-md">
                {[
                  { name: "Rain", img: "/traits/Wet.png" },
                  { name: "Snowy", img: "/traits/Snowy.png" },
                  { name: "Starfall", img: "/traits/Starfall.png" },
                  { name: "Galactic", img: "/traits/Galactic.png" },
                  { name: "Bombardiro Raid", img: "/traits/Bombardiro.png" },
                  { name: "Matteo's Hat", img: "/traits/MatteoHat.png" },
                  { name: "Spider", img: "/traits/Spider.png" },
                  { name: "Strawberry", img: "/traits/Strawberry.png" },
                  { name: "Taco", img: "/traits/Taco.png" },
                  { name: "Tung Tung", img: "/traits/EvilTungTungSahur.png" },
                  { name: "Glitch", img: "/traits/Glitch.png" },
                  { name: "Crab Rave", img: "/traits/Crab.png" },
                  { name: "Solar Flare", img: "/traits/SolarFlare.png" },
                  { name: "Fire", img: "/traits/Fire.png" },
                  { name: "Fireworks", img: "/traits/Fireworks.png" },
                  { name: "Nyan Cats", img: "/traits/Nyan.png" },
                  { name: "Disco", img: "/traits/Disco.png" },
                  { name: "10B", img: "/traits/10b.png" },
                  { name: "Bloodmoon", img: "/traits/Bloodmoon.png" },
                  { name: "Brazil", img: "/traits/Brazil.png" },
                  { name: "Bubblegum", img: "/traits/Bubblegum.png" },
                  { name: "Rainbow", img: "/traits/Rainbowmachine.png" },
                  { name: "Candy Aurora", img: "/traits/CandyAurora.png" },
                  { name: "Matteo", img: "/traits/MatteoHat.png" },
                  { name: "UFO", img: "/traits/Alienevent.png" },
                  { name: "Sleepy", img: "/traits/Sleepy.png" },
                  { name: "Mygame43", img: "/traits/MyGame43.png" }

                ].map((trait, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const newTraits = selectedTraits.includes(trait.name)
                        ? selectedTraits.filter(t => t !== trait.name)
                        : [...selectedTraits, trait.name];
                      setSelectedTraits(newTraits);
                    }}
                    className={`aspect-square rounded border-2 transition-all flex flex-col items-center justify-center text-xs p-1 ${
                      selectedTraits.includes(trait.name)
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
                    <span className="text-[10px] leading-tight">{trait.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mutations Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Mutations</label>
              <Select value={mutationFilter} onValueChange={setMutationFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Mutations</SelectItem>
                  <SelectItem value="Gold">Gold</SelectItem>
                  <SelectItem value="Diamond">Diamond</SelectItem>
                  <SelectItem value="Rainbow">Rainbow</SelectItem>
                  <SelectItem value="Lava">Lava</SelectItem>
                  <SelectItem value="Bloodrot">Bloodrot</SelectItem>
                  <SelectItem value="Celestial">Celestial</SelectItem>
                  <SelectItem value="Candy">Candy</SelectItem>
                  <SelectItem value="Galaxy">Galaxy</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Quick Filters */}
            <div>
              <label className="text-sm font-medium mb-2 block">Quick Filters</label>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Filter className="h-4 w-4 mr-2" />
                  My Interests
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  High Value Items
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Active Trades</h1>
              <p className="text-muted-foreground">
                Found {filteredTrades.length} trades matching your criteria
              </p>
            </div>

            <div className="space-y-4">
              {filteredTrades.map((trade) => (
                <Card 
                  key={trade.id} 
                  className="hover:shadow-lg transition-all duration-200 cursor-pointer border-border hover:border-primary/50"
                  onClick={() => setSelectedTrade(trade)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={trade.avatar} alt={trade.trader} />
                          <AvatarFallback>{trade.trader.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{trade.trader}</h3>
                          <p className="text-sm text-muted-foreground">{trade.createdAt}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(trade.status)}>
                        {trade.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-medium text-primary mb-2">Offering:</h4>
                        <div className="flex flex-wrap gap-1">
                          {trade.offering.map((item, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-accent mb-2">Requesting:</h4>
                        <div className="flex flex-wrap gap-1">
                          {trade.requesting.map((item, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTrades.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <p className="text-muted-foreground mb-4">No trades found matching your criteria</p>
                  <Button variant="outline" onClick={() => {
                    setSearchTerm("");
                    setRarityFilter("all");
                    setMutationFilter("all");
                    setSelectedTraits([]);
                  }}>
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trades;

// --- TRAIT IMAGE INSTRUCTIONS ---
// Upload your trait images to /public/traits/ in your project directory.
// Name them: water.png, ice.png, star.png, ghost.png, plane.png, tv.png, fin.png, spider.png, berry.png, taco.png
// Recommended size: 20x20px (PNG or SVG).