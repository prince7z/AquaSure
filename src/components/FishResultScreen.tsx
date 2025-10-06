import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Weight, 
  Star, 
  Clock, 
  Thermometer, 
  Save, 
  Share2,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { User, Screen } from '../App';

interface FishResultScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
}

// Mock fish result data
const fishResult = {
  id: 1,
  species: 'Rohu',
  regionalName: 'रोहू',
  scientificName: 'Labeo rohita',
  image: 'https://images.unsplash.com/photo-1670014543655-8fcaea9105ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZpc2glMjBzZWFmb29kfGVufDF8fHx8MTc1OTQ3NTIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  dateTime: new Date().toLocaleString(),
  location: {
    coordinates: '19.0760°N, 72.8777°E',
    address: 'Mumbai Harbor, Maharashtra'
  },
  weight: '2.5 kg',
  quantity: '3 pieces',
  freshnessScore: 8.5,
  canPreserve: true,
  preservationTime: '24-48 hours',
  preservationTips: [
    'Store in crushed ice immediately',
    'Keep in saltwater brine (3% salt)',
    'Maintain temperature below 4°C',
    'Avoid direct sunlight',
    'Clean and gut within 2 hours'
  ],
  nutritionalInfo: {
    protein: '18.5g per 100g',
    fat: '1.2g per 100g',
    omega3: 'High content'
  },
  marketValue: '₹180-220 per kg',
  confidence: '92%'
};

export default function FishResultScreen({ user, onNavigate }: FishResultScreenProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const getFreshnessColor = (score: number) => {
    if (score >= 8) return 'bg-green-100 text-green-800 border-green-300';
    if (score >= 6) return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    return 'bg-red-100 text-red-800 border-red-300';
  };

  const getFreshnessText = (score: number) => {
    if (score >= 8) return 'Excellent / उत्कृष्ट';
    if (score >= 6) return 'Good / अच्छा';
    return 'Fair / ठीक';
  };

  const handleSave = () => {
    setIsSaved(true);
    // In a real app, this would save to database
    setTimeout(() => {
      // Show success and redirect to catch log
      onNavigate('catchlog');
    }, 1500);
  };

  const handleShare = () => {
    setIsSharing(true);
    // Simulate sharing
    setTimeout(() => {
      setIsSharing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('camera')}
              className="text-white hover:bg-green-700 p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1>AquaSquare Result</h1>
              <p className="text-green-100 text-sm">मछली विश्लेषण परिणाम</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleShare}
            disabled={isSharing}
            className="text-white hover:bg-green-700"
          >
            {isSharing ? (
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Fish Image */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <ImageWithFallback
                src={fishResult.image}
                alt={fishResult.species}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-green-800 border border-green-300">
                  Confidence: {fishResult.confidence}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Species Information */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-green-800">Species Identification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="text-2xl text-gray-800">{fishResult.species}</h3>
              <p className="text-green-600 text-lg">{fishResult.regionalName}</p>
              <p className="text-gray-500 text-sm italic">{fishResult.scientificName}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-gray-500 text-sm">Weight / वजन</p>
                <div className="flex items-center space-x-2">
                  <Weight className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-800">{fishResult.weight}</span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm">Quantity / मात्रा</p>
                <span className="text-gray-800">{fishResult.quantity}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Freshness Score */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-800 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Freshness Analysis / ताजगी विश्लेषण
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-3xl text-gray-800">{fishResult.freshnessScore}/10</div>
                <p className="text-gray-500 text-sm">{getFreshnessText(fishResult.freshnessScore)}</p>
              </div>
              <Badge className={`text-lg px-4 py-2 ${getFreshnessColor(fishResult.freshnessScore)}`}>
                {fishResult.freshnessScore >= 8 ? 'Fresh' : fishResult.freshnessScore >= 6 ? 'Good' : 'Fair'}
              </Badge>
            </div>
            
            {/* Freshness Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${fishResult.freshnessScore * 10}%` }}
              ></div>
            </div>
            <p className="text-gray-500 text-xs">Based on visual analysis and AI detection</p>
          </CardContent>
        </Card>

        {/* Location & Time */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-800">Capture Details / विवरण</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Date & Time / दिनांक और समय</p>
                <p className="text-gray-800">{fishResult.dateTime}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <p className="text-gray-500 text-sm">Location / स्थान</p>
                <p className="text-gray-800">{fishResult.location.address}</p>
                <p className="text-gray-500 text-xs">{fishResult.location.coordinates}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preservation Information */}
        <Card className={fishResult.canPreserve ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-orange-500'}>
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-800 flex items-center">
              <Thermometer className="w-5 h-5 mr-2 text-blue-500" />
              Preservation Guide / संरक्षण गाइड
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Can Preserve / संरक्षित कर सकते हैं</p>
                <div className="flex items-center space-x-2">
                  {fishResult.canPreserve ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                  )}
                  <span className={fishResult.canPreserve ? 'text-green-600' : 'text-orange-600'}>
                    {fishResult.canPreserve ? 'Yes / हाँ' : 'No / नहीं'}
                  </span>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-gray-500 text-sm">Duration / अवधि</p>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-800">{fishResult.preservationTime}</span>
                </div>
              </div>
            </div>

            {fishResult.canPreserve && (
              <Alert className="bg-blue-50 border-blue-200">
                <Thermometer className="h-4 w-4 text-blue-600" />
                <AlertDescription>
                  <p className="text-blue-800 mb-2">Preservation Tips / संरक्षण सुझाव:</p>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    {fishResult.preservationTips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-gray-800">Additional Info / अतिरिक्त जानकारी</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <h4 className="text-green-800 mb-1">Nutritional Value / पोषण मूल्य</h4>
                <div className="text-sm text-green-700 space-y-1">
                  <p>Protein: {fishResult.nutritionalInfo.protein}</p>
                  <p>Fat: {fishResult.nutritionalInfo.fat}</p>
                  <p>Omega-3: {fishResult.nutritionalInfo.omega3}</p>
                </div>
              </div>
              
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="text-orange-800 mb-1">Market Value / बाजार मूल्य</h4>
                <p className="text-orange-700">{fishResult.marketValue}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Message */}
        {isSaved && (
          <Alert className="bg-green-50 border-green-500">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Fish data saved successfully! Redirecting to catch log...
            </AlertDescription>
          </Alert>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pb-6">
          <Button 
            onClick={handleSave}
            disabled={isSaved}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-lg p-4 h-auto"
          >
            {isSaved ? (
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Saved Successfully!</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Save className="w-5 h-5" />
                <span>Save Result / परिणाम सेव करें</span>
              </div>
            )}
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline"
              onClick={() => onNavigate('camera')}
              className="text-lg p-3 h-auto"
            >
              Scan Again / फिर स्कैन करें
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => onNavigate('market')}
              className="text-lg p-3 h-auto"
            >
              Check Market / बाजार देखें
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}