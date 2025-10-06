import React, { useState } from 'react';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import CameraScreen from './components/CameraScreen';
import CatchLogScreen from './components/CatchLogScreen';
import MapScreen from './components/MapScreen';
import SOSScreen from './components/SOSScreen';
import MarketAnalysisScreen from './components/MarketAnalysisScreen';
import FishResultScreen from './components/FishResultScreen';

export type UserRole = 'fisherman' | 'consumer' | 'guest';
export type Language = 'english' | 'hindi' | 'tamil' | 'telugu' | 'bengali' | 'marathi';

export interface User {
  role: UserRole;
  language: Language;
  name: string;
}

export type Screen = 'register' | 'home' | 'camera' | 'catchlog' | 'map' | 'sos' | 'market' | 'fishresult';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('register');
  const [user, setUser] = useState<User | null>(null);

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleRegistration = (userData: User) => {
    setUser(userData);
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('register');
  };

  return (
    <div className="min-h-screen bg-white">
      {currentScreen === 'register' && (
        <RegisterScreen onRegister={handleRegistration} />
      )}
      
      {currentScreen === 'home' && (
        <HomeScreen 
          user={user!} 
          onNavigate={navigateToScreen}
          onLogout={handleLogout}
        />
      )}
      
      {currentScreen === 'camera' && (
        <CameraScreen 
          user={user!} 
          onNavigate={navigateToScreen}
        />
      )}
      
      {currentScreen === 'catchlog' && (
        <CatchLogScreen 
          user={user!} 
          onNavigate={navigateToScreen}
        />
      )}
      
      {currentScreen === 'map' && (
        <MapScreen 
          user={user!} 
          onNavigate={navigateToScreen}
        />
      )}
      
      {currentScreen === 'sos' && (
        <SOSScreen 
          user={user!} 
          onNavigate={navigateToScreen}
        />
      )}
      
      {currentScreen === 'market' && (
        <MarketAnalysisScreen 
          user={user!} 
          onNavigate={navigateToScreen}
        />
      )}
      
      {currentScreen === 'fishresult' && (
        <FishResultScreen 
          user={user!} 
          onNavigate={navigateToScreen}
        />
      )}
    </div>
  );
}