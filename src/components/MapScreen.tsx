import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, MapPin, AlertTriangle, Anchor, Fish, Shield, Navigation } from 'lucide-react';
import type { User, Screen } from '../App';

interface MapScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
}

// Mock location data
const fishingHotspots = [
  {
    id: 1,
    name: 'Kerala Deep Waters',
    regionalName: 'केरल गहरे पानी',
    coordinates: '9.9312°N, 76.2673°E',
    bestTime: 'Early morning, Evening',
    commonFish: ['Rohu', 'Kingfish', 'Pomfret'],
    rating: 4.5,
    distance: '12 km',
    depth: '25-40m'
  },
  {
    id: 2,
    name: 'Mumbai Harbor Zone',
    regionalName: 'मुंबई बंदरगाह क्षेत्र',
    coordinates: '18.9220°N, 72.8347°E',
    bestTime: 'Night fishing',
    commonFish: ['Pomfret', 'Mackerel', 'Sardine'],
    rating: 4.2,
    distance: '8 km',
    depth: '15-30m'
  },
  {
    id: 3,
    name: 'Goa Coastal Belt',
    regionalName: 'गोवा तटीय बेल्ट',
    coordinates: '15.2993°N, 74.1240°E',
    bestTime: 'Dawn to noon',
    commonFish: ['Kingfish', 'Tuna', 'Shark'],
    rating: 4.8,
    distance: '20 km',
    depth: '30-60m'
  }
];

const restrictedZones = [
  {
    id: 1,
    name: 'Navy Training Area',
    regionalName: 'नौसेना प्रशिक्षण क्षेत्र',
    coordinates: '18.5°N, 72.8°E',
    reason: 'Military operations',
    severity: 'high',
    validUntil: '2024-12-31'
  },
  {
    id: 2,
    name: 'Marine Sanctuary',
    regionalName: 'समुद्री अभयारण्य',
    coordinates: '15.0°N, 74.0°E',
    reason: 'Marine conservation',
    severity: 'medium',
    validUntil: 'Permanent'
  }
];

const coastGuardAreas = [
  {
    id: 1,
    name: 'Mumbai Coast Guard',
    regionalName: 'मुंबई तटरक्षक',
    coordinates: '18.9°N, 72.8°E',
    contact: '+91-22-1234-5678',
    services: ['Emergency rescue', 'Navigation help', 'Weather updates'],
    distance: '5 km'
  },
  {
    id: 2,
    name: 'Kochi Naval Base',
    regionalName: 'कोच्चि नौसैनिक बेस',
    coordinates: '9.9°N, 76.2°E',
    contact: '+91-484-1234-5678',
    services: ['Emergency rescue', 'Medical aid', 'Equipment support'],
    distance: '15 km'
  }
];

export default function MapScreen({ user, onNavigate }: MapScreenProps) {
  const [activeTab, setActiveTab] = useState('hotspots');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRatingStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
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
          <h1>Fishing Areas</h1>
          <p className="text-green-100 text-sm">मछली पकड़ने के क्षेत्र</p>
        </div>
      </div>

      <div className="p-4">
        {/* Map Placeholder */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="w-full h-48 bg-gradient-to-b from-blue-100 to-blue-200 rounded-lg flex items-center justify-center relative">
              <div className="text-center">
                <Navigation className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <p className="text-blue-800">Interactive Map</p>
                <p className="text-blue-600 text-sm">इंटरैक्टिव मैप</p>
              </div>
              
              {/* Mock location markers */}
              <div className="absolute top-4 left-8 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-12 w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="absolute top-12 right-6 w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-600 text-sm">Current Location: Loading GPS...</p>
              <p className="text-green-600 text-xs">वर्तमान स्थान: GPS लोड हो रहा है...</p>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hotspots">Hotspots</TabsTrigger>
            <TabsTrigger value="restricted">Restricted</TabsTrigger>
            <TabsTrigger value="coastguard">Coast Guard</TabsTrigger>
          </TabsList>

          <TabsContent value="hotspots" className="mt-4">
            <div className="mb-4">
              <h3 className="text-gray-800">Fishing Hotspots</h3>
              <p className="text-green-600 text-sm">मछली पकड़ने के हॉटस्पॉट</p>
            </div>

            <div className="space-y-4">
              {fishingHotspots.map((spot) => (
                <Card key={spot.id} className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-gray-800">{spot.name}</h4>
                        <p className="text-green-600 text-sm">{spot.regionalName}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-500 text-sm">{getRatingStars(spot.rating)}</div>
                        <p className="text-xs text-gray-500">{spot.rating}/5</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        <span>{spot.coordinates} • {spot.distance} away</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Anchor className="w-4 h-4 mr-2 text-blue-500" />
                        <span>Depth: {spot.depth}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Fish className="w-4 h-4 mr-2 text-green-500" />
                        <span>Common: {spot.commonFish.join(', ')}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500">Best time:</p>
                          <p className="text-sm text-green-700">{spot.bestTime}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Navigate
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="restricted" className="mt-4">
            <div className="mb-4">
              <h3 className="text-gray-800">Restricted Zones</h3>
              <p className="text-red-600 text-sm">प्रतिबंधित क्षेत्र</p>
            </div>

            <Card className="mb-4 bg-red-50 border-red-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-red-800">
                  <AlertTriangle className="w-5 h-5" />
                  <p>Warning: Fishing prohibited in these areas</p>
                </div>
                <p className="text-red-600 text-sm mt-1">चेतावनी: इन क्षेत्रों में मछली पकड़ना प्रतिबंधित</p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {restrictedZones.map((zone) => (
                <Card key={zone.id} className="border-l-4 border-l-red-500">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-gray-800">{zone.name}</h4>
                        <p className="text-red-600 text-sm">{zone.regionalName}</p>
                      </div>
                      <Badge className={getSeverityColor(zone.severity)}>
                        {zone.severity.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        <span>{zone.coordinates}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                        <span>Reason: {zone.reason}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <p className="text-xs text-gray-500">Valid until: {zone.validUntil}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coastguard" className="mt-4">
            <div className="mb-4">
              <h3 className="text-gray-800">Coast Guard Areas</h3>
              <p className="text-blue-600 text-sm">तटरक्षक क्षेत्र</p>
            </div>

            <Card className="mb-4 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-blue-800">
                  <Shield className="w-5 h-5" />
                  <p>Emergency contacts and support areas</p>
                </div>
                <p className="text-blue-600 text-sm mt-1">आपातकालीन संपर्क और सहायता क्षेत्र</p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {coastGuardAreas.map((area) => (
                <Card key={area.id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-gray-800">{area.name}</h4>
                        <p className="text-blue-600 text-sm">{area.regionalName}</p>
                      </div>
                      <Badge variant="outline" className="text-blue-700">
                        {area.distance}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        <span>{area.coordinates}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Shield className="w-4 h-4 mr-2 text-blue-500" />
                        <span>Services: {area.services.join(', ')}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-500">Emergency Contact:</p>
                          <p className="text-sm text-blue-700">{area.contact}</p>
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Call Now
                        </Button>
                      </div>
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