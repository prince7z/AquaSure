import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Camera, FileText, Map, AlertTriangle, TrendingUp, LogOut, Fish } from 'lucide-react';
import type { User, Screen } from '../App';

interface HomeScreenProps {
  user: User;
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

const menuItems = [
  {
    id: 'camera' as Screen,
    title: 'Fish Recognition',
    subtitle: 'मछली पहचान',
    icon: Camera,
    color: 'bg-blue-100 text-blue-600',
    description: 'Identify fish species'
  },
  {
    id: 'catchlog' as Screen,
    title: 'Catch Records',
    subtitle: 'पकड़ का रिकॉर्ड',
    icon: FileText,
    color: 'bg-green-100 text-green-600',
    description: 'View catch history'
  },
  {
    id: 'map' as Screen,
    title: 'Fishing Areas',
    subtitle: 'मछली पकड़ने के क्षेत्र',
    icon: Map,
    color: 'bg-purple-100 text-purple-600',
    description: 'Hotspots & zones'
  },
  {
    id: 'market' as Screen,
    title: 'Market Analysis',
    subtitle: 'बाज़ार विश्लेषण',
    icon: TrendingUp,
    color: 'bg-orange-100 text-orange-600',
    description: 'Price trends'
  },
  {
    id: 'sos' as Screen,
    title: 'Emergency SOS',
    subtitle: 'आपातकालीन SOS',
    icon: AlertTriangle,
    color: 'bg-red-100 text-red-600',
    description: 'Emergency help'
  }
];

export default function HomeScreen({ user, onNavigate, onLogout }: HomeScreenProps) {
  const greeting = user.language === 'hindi' ? 'नमस्ते' : 'Hello';
  const roleText = user.role === 'fisherman' ? 'मछुआरा' : 
                   user.role === 'consumer' ? 'खरीदार' : 'अतिथि';

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Fish className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1>{greeting}, {user.name}</h1>
              <p className="text-green-100 text-sm">{roleText}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onLogout}
            className="text-white hover:bg-green-700"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="p-4">
        <Card className="bg-gradient-to-r from-green-100 to-blue-50 border-green-200">
          <CardContent className="p-4">
            <h2 className="text-green-800 mb-2">Welcome to Fish Market Helper</h2>
            <p className="text-green-700 text-sm">
              {user.role === 'fisherman' && 'Track your catches, find fishing spots, and monitor market prices.'}
              {user.role === 'consumer' && 'Find fresh fish, check market prices, and locate sellers.'}
              {user.role === 'guest' && 'Explore fishing information and market data.'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Menu Grid */}
      <div className="p-4 space-y-4">
        <h3 className="text-green-800 mb-4">Main Features / मुख्य सुविधाएं</h3>
        
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item) => (
            <Card 
              key={item.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 border-l-4 border-l-green-500"
              onClick={() => onNavigate(item.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-green-600 text-sm mb-1">{item.subtitle}</p>
                    <p className="text-gray-500 text-xs">{item.description}</p>
                  </div>
                  <div className="text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-gray-500 text-sm">
        <p>Data will be updated when network is available</p>
        <p className="text-xs mt-1">नेटवर्क उपलब्ध होने पर डेटा अपडेट होगा</p>
      </div>
    </div>
  );
}