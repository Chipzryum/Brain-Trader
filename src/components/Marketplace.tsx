import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import TradeCard from "./TradeCard";

// Mock data for demonstration
const mockTrades = [
  {
    id: "1",
    trader: "SkibidiMaster",
    offering: ["Rizz Potion", "Sigma Blade", "Ohio Charm"],
    requesting: ["Gyat Shield", "Brainrot Crystal"],
    status: "active" as const,
    createdAt: "2 hours ago"
  },
  {
    id: "2",
    trader: "AlphaChadGamer",
    offering: ["Mewing Technique", "Fanum Tax Token"],
    requesting: ["Bussin Weapon", "No Cap Armor"],
    status: "pending" as const,
    createdAt: "4 hours ago"
  },
  {
    id: "3",
    trader: "BetaNoobSlayer",
    offering: ["Cringe Remover", "Based Points x50"],
    requesting: ["Sigma Grindset Manual"],
    status: "completed" as const,
    createdAt: "1 day ago"
  },
  {
    id: "4",
    trader: "GenZTrader420",
    offering: ["L + Ratio Counter", "Touch Grass Voucher"],
    requesting: ["Gigachad Status", "Main Character Energy"],
    status: "active" as const,
    createdAt: "3 hours ago"
  },
  {
    id: "5",
    trader: "SusAmogusKing",
    offering: ["Imposter Disguise", "Vent Access Pass"],
    requesting: ["Crewmate Trust Badge", "Emergency Meeting Horn"],
    status: "active" as const,
    createdAt: "5 hours ago"
  },
  {
    id: "6",
    trader: "MonkeNFTHolder",
    offering: ["Banana Currency x100", "Ape Together Strong Badge"],
    requesting: ["Diamond Hands Gloves"],
    status: "pending" as const,
    createdAt: "6 hours ago"
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTrades = mockTrades.filter(trade => {
    const matchesSearch = trade.trader.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trade.offering.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())) ||
      trade.requesting.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || trade.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <section id="marketplace" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Active Marketplace
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover amazing trades from the community
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search trades, items, or traders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="cyber" size="sm">
              Advanced Filter
            </Button>
          </div>
        </div>

        {/* Trade Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrades.map((trade) => (
            <TradeCard key={trade.id} {...trade} />
          ))}
        </div>

        {filteredTrades.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No trades found matching your criteria.</p>
            <Button variant="neon" className="mt-4">
              Create First Trade
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredTrades.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="trade" size="lg">
              Load More Trades
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Marketplace;