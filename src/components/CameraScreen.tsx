import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Camera, ArrowLeft, MapPin, Clock, Star } from 'lucide-react';
import type { User, Screen } from '../App';

interface CameraScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
}

// Mock fish recognition results
const mockResults = [
  {
    id: 1,
    species: 'Rohu',
    regionalName: 'रोहू',
    timestamp: '2024-10-02 14:30',
    location: 'Kerala Coast',
    quantity: '2.5 kg',
    freshnessScore: 8.5,
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    species: 'Pomfret',
    regionalName: 'पापलेट',
    timestamp: '2024-10-02 12:15',
    location: 'Mumbai Harbor',
    quantity: '1.8 kg',
    freshnessScore: 9.2,
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    species: 'Kingfish',
    regionalName: 'सुरमई',
    timestamp: '2024-10-01 16:45',
    location: 'Goa Waters',
    quantity: '3.2 kg',
    freshnessScore: 7.8,
    image: '/api/placeholder/300/200'
  }
];

export default function CameraScreen({ user, onNavigate }: CameraScreenProps) {
  const [showResults, setShowResults] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  const handleCapture = () => {
    setIsCapturing(true);
    // Simulate camera capture delay
    setTimeout(() => {
      setIsCapturing(false);
      // Navigate directly to fish result screen
      onNavigate('fishresult');
    }, 2000);
  };

  const getFreshnessColor = (score: number) => {
    if (score >= 8) return 'bg-green-100 text-green-800';
    if (score >= 6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getFreshnessText = (score: number) => {
    if (score >= 8) return 'Fresh / ताज़ा';
    if (score >= 6) return 'Good / अच्छा';
    return 'Check / जांच लें';
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
          <h1>Fish Recognition</h1>
          <p className="text-green-100 text-sm">मछली पहचान</p>
        </div>
      </div>

      {!showResults ? (
        <div className="p-4">
          {/* Camera Interface */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  {isCapturing ? (
                    <div className="text-center">
                      <div className="animate-spin w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-2"></div>
                      <p className="text-gray-600">Analyzing...</p>
                      <p className="text-green-600 text-sm">विश्लेषण कर रहे हैं...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Point camera at fish</p>
                      <p className="text-green-600 text-sm">मछली पर कैमरा रखें</p>
                    </div>
                  )}
                </div>

                <Button 
                  onClick={handleCapture}
                  disabled={isCapturing}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg p-3 h-auto"
                >
                  {isCapturing ? 'Processing...' : 'Capture Fish / फोटो लें'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="text-blue-800 mb-2">Tips for best results:</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Hold camera steady / कैमरा स्थिर रखें</li>
                <li>• Ensure good lighting / अच्छी रोशनी में फोटो लें</li>
                <li>• Keep fish clearly visible / मछली साफ दिखाई दे</li>
                <li>• Avoid shadows / छाया से बचें</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="p-4">
          {/* Current Recognition Result */}
          <Card className="mb-6 border-green-500 border-l-4">
            <CardHeader>
              <CardTitle className="text-green-800">Recognition Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Captured Fish Image</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Species:</span>
                  <Badge variant="outline" className="text-green-700">Rohu / रोहू</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Freshness:</span>
                  <Badge className={getFreshnessColor(8.5)}>
                    <Star className="w-3 h-3 mr-1" />
                    8.5/10 - Fresh
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Estimated Weight:</span>
                  <span className="text-green-700">2.5 kg</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  Captured: {new Date().toLocaleString()}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location: Current Position
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <Button 
                  onClick={() => setShowResults(false)}
                  variant="outline" 
                  className="flex-1"
                >
                  Capture Again
                </Button>
                <Button 
                  onClick={() => onNavigate('catchlog')}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Save to Log
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Previous Results */}
          <h3 className="text-gray-800 mb-4">Previous Results / पिछले परिणाम</h3>
          
          <div className="space-y-4">
            {mockResults.map((result) => (
              <Card key={result.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex space-x-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Camera className="w-6 h-6 text-gray-400" />
                    </div>
                    
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-gray-800">{result.species}</h4>
                          <p className="text-green-600 text-sm">{result.regionalName}</p>
                        </div>
                        <Badge className={getFreshnessColor(result.freshnessScore)}>
                          {result.freshnessScore}/10
                        </Badge>
                      </div>
                      
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {result.timestamp}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {result.location}
                        </div>
                      </div>
                      
                      <p className="text-sm text-green-700">Quantity: {result.quantity}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}