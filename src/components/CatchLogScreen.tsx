import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, Calendar, MapPin, Fish, Star, Filter } from 'lucide-react';
import type { User, Screen } from '../App';

interface CatchLogScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
}

// Mock catch data
const mockCatches = [
  {
    id: 1,
    fishType: 'Rohu',
    regionalName: 'रोहू',
    quantity: '2.5 kg',
    datetime: '2024-10-02 14:30',
    location: 'Kerala Coast, Sector A',
    coordinates: '9.9312°N, 76.2673°E',
    freshnessScore: 8.5,
    weather: 'Clear',
    method: 'Net fishing'
  },
  {
    id: 2,
    fishType: 'Pomfret',
    regionalName: 'पापलेट',
    quantity: '1.8 kg',
    datetime: '2024-10-02 12:15',
    location: 'Mumbai Harbor, Zone B',
    coordinates: '18.9220°N, 72.8347°E',
    freshnessScore: 9.2,
    weather: 'Partly cloudy',
    method: 'Hook & line'
  },
  {
    id: 3,
    fishType: 'Kingfish',
    regionalName: 'सुरमई',
    quantity: '3.2 kg',
    datetime: '2024-10-01 16:45',
    location: 'Goa Waters, Deep sea',
    coordinates: '15.2993°N, 74.1240°E',
    freshnessScore: 7.8,
    weather: 'Windy',
    method: 'Trawl net'
  },
  {
    id: 4,
    fishType: 'Mackerel',
    regionalName: 'बांगड़ा',
    quantity: '4.1 kg',
    datetime: '2024-10-01 09:20',
    location: 'Karnataka Coast',
    coordinates: '14.5204°N, 74.3587°E',
    freshnessScore: 8.9,
    weather: 'Sunny',
    method: 'Seine net'
  },
  {
    id: 5,
    fishType: 'Sardine',
    regionalName: 'सार्डिन',
    quantity: '1.2 kg',
    datetime: '2024-09-30 18:00',
    location: 'Tamil Nadu Waters',
    coordinates: '11.0168°N, 76.9558°E',
    freshnessScore: 6.5,
    weather: 'Overcast',
    method: 'Cast net'
  }
];

export default function CatchLogScreen({ user, onNavigate }: CatchLogScreenProps) {
  const [activeTab, setActiveTab] = useState('all');

  const getFreshnessColor = (score: number) => {
    if (score >= 8) return 'bg-green-100 text-green-800';
    if (score >= 6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getTotalWeight = () => {
    return mockCatches.reduce((total, catch_) => {
      const weight = parseFloat(catch_.quantity.split(' ')[0]);
      return total + weight;
    }, 0).toFixed(1);
  };

  const getTodaysCatches = () => {
    const today = new Date().toDateString();
    return mockCatches.filter(catch_ => 
      new Date(catch_.datetime).toDateString() === today
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 flex items-center space-x-3">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => onNavigate('home')}
          className="text-white hover:bg-green-700 p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1>Catch Records</h1>
          <p className="text-green-100 text-sm">पकड़ का रिकॉर्ड</p>
        </div>
      </div>

      <div className="p-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl text-green-800">{mockCatches.length}</h3>
              <p className="text-green-600 text-sm">Total Catches</p>
              <p className="text-green-500 text-xs">कुल पकड़</p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <h3 className="text-2xl text-blue-800">{getTotalWeight()} kg</h3>
              <p className="text-blue-600 text-sm">Total Weight</p>
              <p className="text-blue-500 text-xs">कुल वजन</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Records</TabsTrigger>
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-800">All Catch Records</h3>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            
            <div className="space-y-4">
              {mockCatches.map((catch_) => (
                <Card key={catch_.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-gray-800 text-lg">{catch_.fishType}</h4>
                        <p className="text-green-600">{catch_.regionalName}</p>
                      </div>
                      <Badge className={getFreshnessColor(catch_.freshnessScore)}>
                        <Star className="w-3 h-3 mr-1" />
                        {catch_.freshnessScore}/10
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Fish className="w-4 h-4 mr-2 text-green-500" />
                          <span>Quantity: {catch_.quantity}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                          <span>{catch_.datetime}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-red-500" />
                          <span className="text-xs">{catch_.location}</span>
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          Method: {catch_.method}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t text-xs text-gray-500">
                      <div className="flex justify-between">
                        <span>Weather: {catch_.weather}</span>
                        <span>GPS: {catch_.coordinates}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="today" className="mt-4">
            <div className="mb-4">
              <h3 className="text-gray-800">Today's Catches</h3>
              <p className="text-green-600 text-sm">आज की पकड़</p>
            </div>
            
            {getTodaysCatches().length === 0 ? (
              <Card className="bg-gray-50">
                <CardContent className="p-8 text-center">
                  <Fish className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">No catches recorded today</p>
                  <p className="text-green-600 text-sm">आज कोई पकड़ दर्ज नहीं</p>
                  <Button 
                    onClick={() => onNavigate('camera')}
                    className="mt-4 bg-green-600 hover:bg-green-700"
                  >
                    Add New Catch
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {getTodaysCatches().map((catch_) => (
                  <Card key={catch_.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-gray-800">{catch_.fishType}</h4>
                          <p className="text-green-600 text-sm">{catch_.regionalName}</p>
                          <p className="text-gray-500 text-sm">{catch_.quantity}</p>
                        </div>
                        <Badge className={getFreshnessColor(catch_.freshnessScore)}>
                          {catch_.freshnessScore}/10
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="week" className="mt-4">
            <div className="mb-4">
              <h3 className="text-gray-800">This Week's Summary</h3>
              <p className="text-green-600 text-sm">इस सप्ताह का सारांश</p>
            </div>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-green-800">Weekly Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl text-green-600">{mockCatches.length}</p>
                    <p className="text-sm text-gray-600">Fishing trips</p>
                  </div>
                  <div>
                    <p className="text-2xl text-blue-600">{getTotalWeight()} kg</p>
                    <p className="text-sm text-gray-600">Total catch</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {mockCatches.slice(0, 3).map((catch_) => (
                <Card key={catch_.id}>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-800">{catch_.fishType}</p>
                        <p className="text-xs text-gray-500">{catch_.datetime.split(' ')[0]}</p>
                      </div>
                      <p className="text-green-600">{catch_.quantity}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}