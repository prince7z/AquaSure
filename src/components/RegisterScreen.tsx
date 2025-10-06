import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Fish, Users, User } from 'lucide-react';
import type { User as UserType, UserRole, Language } from '../App';
import logoImage from './fish(2).png';

interface RegisterScreenProps {
  onRegister: (user: UserType) => void;
}

const languages = [
  { value: 'english', label: 'English' },
  { value: 'hindi', label: 'हिंदी (Hindi)' },
  { value: 'tamil', label: 'தமிழ் (Tamil)' },
  { value: 'telugu', label: 'తెలుగు (Telugu)' },
  { value: 'bengali', label: 'বাংলা (Bengali)' },
  { value: 'marathi', label: 'मराठी (Marathi)' }
];

export default function RegisterScreen({ onRegister }: RegisterScreenProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState<UserRole>('fisherman');
  const [language, setLanguage] = useState<Language>('english');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onRegister({
        name: name.trim(),
        role,
        language
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16  rounded-full flex items-center justify-center mb-4">
            <img className=" h-30 blend"  src={logoImage} alt="AquaSure Logo" />
          </div>
          <CardTitle className="text-green-800 text-2xl">AquaSure</CardTitle>
          <p className="text-green-600">मछली ऐप्प</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name / नाम</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg p-3"
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Select Role / भूमिका चुनें</Label>
              <RadioGroup value={role} onValueChange={(value) => setRole(value as UserRole)}>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-green-50">
                  <RadioGroupItem value="fisherman" id="fisherman" />
                  <Fish className="w-5 h-5 text-green-600" />
                  <Label htmlFor="fisherman" className="flex-1 cursor-pointer">
                    Fisherman / मछुआरा
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-green-50">
                  <RadioGroupItem value="consumer" id="consumer" />
                  <Users className="w-5 h-5 text-green-600" />
                  <Label htmlFor="consumer" className="flex-1 cursor-pointer">
                    Fish Buyer / मछली खरीदार
                  </Label>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-green-50">
                  <RadioGroupItem value="guest" id="guest" />
                  <User className="w-5 h-5 text-green-600" />
                  <Label htmlFor="guest" className="flex-1 cursor-pointer">
                    Guest / अतिथि
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Preferred Language / भाषा</Label>
              <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
                <SelectTrigger className="text-lg p-3">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg p-3 h-auto"
            >
              Continue / जारी रखें
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}