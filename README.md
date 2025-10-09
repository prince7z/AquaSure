# 🐟 AquaSure - AI-Powered Fisheries Management System

> Empowering India's fishermen with AI-driven automation, real-time analytics, and multilingual accessibility

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Overview

The fisheries sector in India still relies heavily on manual inspection for fish species identification, freshness assessment, and price and weight estimation — processes that are slow, error-prone, and easily manipulated. Lack of automated systems often results in economic loss for fishermen and unfair trade practices in the fish market.

**AquaSure** is an AI-driven mobile application integrated with a cloud-based analytics dashboard that automates fish identification, health analysis, and market prediction. The system leverages quantized deep learning models such as YOLOv8-Tiny, MobileNetV3, and Custom CNNs deployed through PyTorch Mobile to ensure efficient on-device inference and offline functionality.

This solution brings automation, scalability, and transparency to India's fisheries ecosystem using edge AI and hybrid cloud architecture.

## ✨ Key Features

### 🎯 Core Functionality
- **🐠 Fish Recognition** - AI-powered species identification using advanced deep learning models
- **📊 Catch Records** - Comprehensive catch logging and history tracking
- **🗺️ Fishing Areas** - Interactive maps with hotspots, restricted zones, and coast guard areas
- **📈 Market Analysis** - Real-time price trends and market predictions
- **🆘 Emergency SOS** - One-tap emergency alert system with GPS location sharing

### 🌐 Accessibility Features
- **🗣️ Multilingual Support** - Available in English, Hindi, Tamil, Telugu, Bengali, and Marathi
- **📱 Offline-First Design** - Works completely offline with optional weekly/monthly cloud sync
- **🎤 Voice Commands** - Accessible for non-literate users
- **👥 Multi-Role Support** - Separate interfaces for fishermen, consumers, and guests

### 🔧 Technical Capabilities
- **⚡ Edge AI Processing** - On-device inference for instant results
- **☁️ Cloud Synchronization** - Optional data aggregation and backup via AWS
- **📡 Offline Functionality** - Network required only once a week/month for updates
- **💾 Local Data Persistence** - SQLite (Room ORM) for reliable local storage

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite 6.3.5** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### AI/ML Models
- **YOLOv8-Tiny** - Lightweight object detection
- **MobileNetV3** - Efficient image classification
- **Custom CNNs** - Specialized fish species recognition
- **PyTorch Mobile** - On-device inference engine

### Backend (Planned)
- **Kotlin + Jetpack Compose** - Native mobile backend
- **SQLite (Room ORM)** - Local database
- **AWS** - Cloud infrastructure
- **React + Node.js + SQL** - Admin dashboard

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prince7z/AquaSure.git
   cd AquaSure
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be generated in the `build/` directory.

## 📱 Usage Guide

### First Time Setup
1. **Registration** - Select your role (Fisherman/Consumer/Guest) and preferred language
2. **Profile Setup** - Enter your name and basic information
3. **Home Screen** - Access all features from the main dashboard

### For Fishermen
- **Catch Logging** - Record daily catches with AI-assisted species identification
- **Map Navigation** - View fishing hotspots and avoid restricted zones
- **Market Insights** - Check real-time prices before selling
- **Emergency SOS** - Quick access to coast guard in emergencies

### For Consumers
- **Fish Identification** - Verify species and freshness using camera
- **Market Trends** - Track price variations and make informed purchases
- **Quality Assessment** - AI-powered freshness analysis

## 📸 Screenshots

_Coming soon - Screenshots of the application in action_

## 🏗️ Project Structure

```
AquaSure/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── RegisterScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── CameraScreen.tsx
│   │   ├── CatchLogScreen.tsx
│   │   ├── MapScreen.tsx
│   │   ├── SOSScreen.tsx
│   │   ├── MarketAnalysisScreen.tsx
│   │   └── FishResultScreen.tsx
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
└── README.md          # This file
```

## 🎯 Roadmap

- [x] Core UI/UX implementation
- [x] Multi-language support
- [x] Offline-first architecture
- [ ] AI model integration
- [ ] AWS cloud deployment
- [ ] Native mobile app (Kotlin)
- [ ] Admin dashboard
- [ ] Voice command integration
- [ ] Production release

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Prince** - [@prince7z](https://github.com/prince7z)

## 🙏 Acknowledgments

- Indian fisheries community for invaluable feedback
- Open-source contributors and libraries used in this project
- AI/ML research community for model architectures

## 📞 Contact & Support

For questions, suggestions, or support:
- 🐛 **Issues**: [GitHub Issues](https://github.com/prince7z/AquaSure/issues)
- 📧 **Email**: Contact repository owner
- 💬 **Discussions**: [GitHub Discussions](https://github.com/prince7z/AquaSure/discussions)

---

<div align="center">
  Made with ❤️ for India's Fishermen
</div>
