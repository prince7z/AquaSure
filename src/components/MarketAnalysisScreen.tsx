import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, TrendingUp, TrendingDown, Clock, MapPin, RefreshCw } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import type { User, Screen } from '../App';

interface MarketAnalysisScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
}

// Mock market data
const priceData = [
  { name: 'Mon', supply: 45, demand: 65, price: 180 },
  { name: 'Tue', supply: 52, demand: 58, price: 165 },
  { name: 'Wed', supply: 38, demand: 72, price: 195 },
  { name: 'Thu', supply: 41, demand: 69, price: 185 },
  { name: 'Fri', supply: 48, demand: 61, price: 175 },
  { name: 'Sat', supply: 55, demand: 85, price: 220 },
  { name: 'Sun', supply: 33, demand: 78, price: 240 }
];

const fishPrices = [
  {
    id: 1,
    name: 'Rohu',
    regionalName: 'रोहू',
    currentPrice: 180,
    previousPrice: 175,
    trend: 'up',
    market: 'Mumbai',
    quality: 'Fresh',
    availability: 'High'
  },
  {
    id: 2,
    name: 'Pomfret',
    regionalName: 'पापलेट',
    currentPrice: 450,
    previousPrice: 465,
    trend: 'down',
    market: 'Kochi',
    quality: 'Premium',
    availability: 'Medium'
  },
  {
    id: 3,
    name: 'Kingfish',
    regionalName: 'सुरमई',
    currentPrice: 320,
    previousPrice: 310,
    trend: 'up',
    market: 'Goa',
    quality: 'Fresh',
    availability: 'Low'
  },
  {
    id: 4,
    name: 'Mackerel',
    regionalName: 'बांगड़ा',
    currentPrice: 120,
    previousPrice: 125,
    trend: 'down',
    market: 'Chennai',
    quality: 'Fresh',
    availability: 'High'
  },
  {
    id: 5,
    name: 'Sardine',
    regionalName: 'सार्डिन',
    currentPrice: 85,
    previousPrice: 80,
    trend: 'up',
    market: 'Mangalore',
    quality: 'Fresh',
    availability: 'High'
  },
  {
    id: 6,
    name: 'Tuna',
    regionalName: 'टूना',
    currentPrice: 380,
    previousPrice: 375,
    trend: 'up',
    market: 'Mumbai',
    quality: 'Premium',
    availability: 'Medium'
  }
];

const marketTrends = [
  {
    category: 'Overall Market',
    trend: 'up',
    change: '+12%',
    description: 'Prices rising due to festival season'
  },
  {
    category: 'Premium Fish',
    trend: 'up',
    change: '+8%',
    description: 'High demand from restaurants'
  },
  {
    category: 'Local Varieties',
    trend: 'down',
    change: '-3%',
    description: 'Good supply from local fishermen'
  }
];

export default function MarketAnalysisScreen({ user, onNavigate }: MarketAnalysisScreenProps) {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [activeTab, setActiveTab] = useState('prices');

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability.toLowerCase()) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const refreshData = () => {
    setLastUpdated(new Date());
    // In a real app, this would fetch new data
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onNavigate('home')}
            className="text-white hover:bg-green-700 p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1>Market Analysis</h1>
            <p className="text-green-100 text-sm">बाज़ार विश्लेषण</p>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm"
          onClick={refreshData}
          className="text-white hover:bg-green-700"
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="p-4">
        {/* Last Updated Info */}
        <Card className="mb-4 bg-blue-50 border-blue-200">
          <CardContent className="p-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-blue-800">
                <Clock className="w-4 h-4 mr-2" />
                <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
              </div>
              <p className="text-blue-600 text-xs">Data updates when network available</p>
            </div>
            <p className="text-blue-600 text-xs mt-1">नेटवर्क उपलब्ध होने पर डेटा अपडेट होगा</p>
          </CardContent>
        </Card>

        {/* Market Trends Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-green-800">Market Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {marketTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-gray-800">{trend.category}</p>
                    <p className="text-gray-500 text-sm">{trend.description}</p>
                  </div>
                  <div className={`flex items-center space-x-1 ${getTrendColor(trend.trend)}`}>
                    {getTrendIcon(trend.trend)}
                    <span>{trend.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="prices">Fish Prices</TabsTrigger>
            <TabsTrigger value="trends">Supply-Demand</TabsTrigger>
          </TabsList>

          <TabsContent value="prices" className="mt-4">
            <div className="mb-4">
              <h3 className="text-gray-800">Current Fish Prices (₹/kg)</h3>
              <p className="text-green-600 text-sm">वर्तमान मछली की कीमतें</p>
            </div>

            <div className="space-y-4">
              {fishPrices.map((fish) => (
                <Card key={fish.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-gray-800 text-lg">{fish.name}</h4>
                        <p className="text-green-600">{fish.regionalName}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl text-gray-800">₹{fish.currentPrice}</p>
                        <div className={`flex items-center space-x-1 text-sm ${getTrendColor(fish.trend)}`}>
                          {getTrendIcon(fish.trend)}
                          <span>from ₹{fish.previousPrice}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500">Market</p>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1 text-gray-400" />
                          <span className="text-gray-700">{fish.market}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-500">Quality</p>
                        <Badge variant="outline" className="text-blue-700 text-xs">
                          {fish.quality}
                        </Badge>
                      </div>
                      
                      <div>
                        <p className="text-gray-500">Availability</p>
                        <Badge className={`${getAvailabilityColor(fish.availability)} text-xs`}>
                          {fish.availability}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trends" className="mt-4">
            <div className="mb-4">
              <h3 className="text-gray-800">Supply vs Demand Trends</h3>
              <p className="text-green-600 text-sm">आपूर्ति बनाम मांग के रुझान</p>
            </div>

            {/* Chart */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-gray-800">Weekly Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={priceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Bar dataKey="supply" fill="#22c55e" name="Supply" />
                      <Bar dataKey="demand" fill="#3b82f6" name="Demand" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex justify-center space-x-6 mt-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                    <span>Supply</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                    <span>Demand</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">Price Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-green-800">Best Selling Days</h4>
                    <p className="text-green-700 text-sm">Saturday & Sunday show highest demand and prices</p>
                    <p className="text-green-600 text-xs">शनिवार और रविवार को सबसे अधिक मांग और कीमतें</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-blue-800">Supply Insights</h4>
                    <p className="text-blue-700 text-sm">Tuesday & Friday have good supply, lower prices</p>
                    <p className="text-blue-600 text-xs">मंगलवार और शुक्रवार को अच्छी आपूर्ति, कम कीमतें</p>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="text-orange-800">Recommendation</h4>
                    <p className="text-orange-700 text-sm">
                      {user.role === 'fisherman' 
                        ? 'Best to sell on weekends for higher prices'
                        : 'Buy on weekdays for better prices'}
                    </p>
                    <p className="text-orange-600 text-xs">
                      {user.role === 'fisherman'
                        ? 'उच्च कीमत के लिए सप्ताहांत में बेचना सबसे अच्छा'
                        : 'बेहतर कीमत के लिए सप्ताह के दिनों में खरीदें'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}