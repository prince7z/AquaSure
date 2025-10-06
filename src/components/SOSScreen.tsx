import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { ArrowLeft, AlertTriangle, Phone, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import type { User, Screen } from '../App';

interface SOSScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
}

export default function SOSScreen({ user, onNavigate }: SOSScreenProps) {
  const [sosSent, setSosSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSOS = () => {
    setIsLoading(true);
    
    // Simulate SOS sending delay
    setTimeout(() => {
      setIsLoading(false);
      setSosSent(true);
    }, 3000);
  };

  const emergencyContacts = [
    {
      name: 'Coast Guard Emergency',
      nameHindi: 'तटरक्षक आपातकाल',
      number: '1554',
      description: '24/7 Marine emergency'
    },
    {
      name: 'Local Police',
      nameHindi: 'स्थानीय पुलिस',
      number: '100',
      description: 'General emergency'
    },
    {
      name: 'Medical Emergency',
      nameHindi: 'चिकित्सा आपातकाल',
      number: '108',
      description: 'Ambulance service'
    },
    {
      name: 'Fire Department',
      nameHindi: 'अग्निशमन विभाग',
      number: '101',
      description: 'Fire emergency'
    }
  ];

  if (sosSent) {
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
            <h1>Emergency SOS</h1>
            <p className="text-green-100 text-sm">आपातकालीन SOS</p>
          </div>
        </div>

        <div className="p-4">
          {/* Success Message */}
          <Card className="mb-6 border-green-500 bg-green-50">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-green-800 text-xl mb-2">SOS Alert Sent Successfully!</h2>
              <p className="text-green-700 mb-1">SOS अलर्ट सफलतापूर्वक भेजा गया!</p>
              <p className="text-green-600 text-sm">Help is on the way. Stay calm and wait for assistance.</p>
            </CardContent>
          </Card>

          {/* Location Info */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                Location Sent / भेजा गया स्थान
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>Coordinates:</strong> 19.0760°N, 72.8777°E</p>
                <p><strong>Nearest Landmark:</strong> 15 km from Mumbai Coast</p>
                <p><strong>Time Sent:</strong> {new Date().toLocaleString()}</p>
                <p><strong>Signal Strength:</strong> Strong GPS Lock</p>
              </div>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-gray-800">What happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs">1</span>
                  </div>
                  <div>
                    <p className="text-gray-800">Coast Guard has been notified</p>
                    <p className="text-green-600 text-sm">तटरक्षक को सूचित कर दिया गया है</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs">2</span>
                  </div>
                  <div>
                    <p className="text-gray-800">Rescue team is being dispatched</p>
                    <p className="text-green-600 text-sm">बचाव दल भेजा जा रहा है</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs">3</span>
                  </div>
                  <div>
                    <p className="text-gray-800">Your emergency contacts notified</p>
                    <p className="text-green-600 text-sm">आपके आपातकालीन संपर्कों को सूचित किया गया</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Actions */}
          <div className="space-y-3">
            <Button 
              onClick={() => setSosSent(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg p-3 h-auto"
            >
              Send Another SOS Alert
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => onNavigate('home')}
              className="w-full text-lg p-3 h-auto"
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
          <h1>Emergency SOS</h1>
          <p className="text-green-100 text-sm">आपातकालीन SOS</p>
        </div>
      </div>

      <div className="p-4">
        {/* Warning Alert */}
        <Alert className="mb-6 border-red-500 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <p>Use only in real emergencies. False alarms can delay help for others.</p>
            <p className="text-red-600 text-sm mt-1">केवल वास्तविक आपात स्थिति में उपयोग करें। गलत अलार्म दूसरों की मदद में देरी कर सकता है।</p>
          </AlertDescription>
        </Alert>

        {/* Main SOS Button */}
        <Card className="mb-6">
          <CardContent className="p-8 text-center">
            <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-red-700 transition-colors shadow-lg">
              {isLoading ? (
                <div className="animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full"></div>
              ) : (
                <AlertTriangle className="w-16 h-16 text-white" />
              )}
            </div>
            
            <h2 className="text-red-800 text-2xl mb-2">Emergency SOS</h2>
            <p className="text-red-600 mb-1">आपातकालीन SOS</p>
            <p className="text-gray-600 text-sm mb-6">Press and hold for 3 seconds to send distress signal</p>
            
            <Button 
              onClick={handleSOS}
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 text-white text-xl p-4 h-auto"
            >
              {isLoading ? 'Sending SOS...' : 'SEND SOS ALERT'}
            </Button>
            
            {isLoading && (
              <p className="text-red-600 text-sm mt-2">
                Sending emergency alert with your location...
              </p>
            )}
          </CardContent>
        </Card>

        {/* Current Location */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-gray-800 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-red-500" />
              Current Location / वर्तमान स्थान
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>GPS Coordinates:</strong> 19.0760°N, 72.8777°E</p>
              <p><strong>Nearest Coast:</strong> 12 km from Mumbai Harbor</p>
              <p><strong>Signal Status:</strong> <span className="text-green-600">Strong</span></p>
              <p><strong>Last Updated:</strong> {new Date().toLocaleTimeString()}</p>
            </div>
          </CardContent>
        </Card>

        {/* What will happen */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-gray-800">When you press SOS:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>Coast Guard will be immediately notified</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Your exact location will be shared</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>Emergency contacts will be called</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>Rescue teams will be dispatched</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-800">Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="text-gray-800">{contact.name}</p>
                    <p className="text-green-600 text-sm">{contact.nameHindi}</p>
                    <p className="text-gray-500 text-xs">{contact.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-blue-600">{contact.number}</p>
                    <Button size="sm" variant="outline" className="mt-1">
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}