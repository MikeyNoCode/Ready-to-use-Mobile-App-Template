# Ready to use Mobile App Template

A clean, production-ready React Native mobile app template built with Expo SDK 54. This template includes:

- 🚀 Expo SDK 54 with React Native 0.81.4
- 🔄 React Navigation (Stack + Tab navigation)
- 🔐 Supabase Authentication (ready to configure)
- 💰 RevenueCat integration for in-app purchases
- 🎨 Clean project structure
- 📱 Cross-platform (iOS, Android, Web)

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0
- Git
- [Expo Go](https://expo.dev/client) app (for testing on physical devices)

## Option A: Using Windsurf/Curor (Recommended for Beginners)

### 1. Get Started with AI Assistance
- Download and install [Windsurf/Curor](https://www.windsurf.com)
- Open the application and sign in to your account
- Use the AI Agent by typing: 
  ```
  Clone the repository: https://github.com/MikeyNoCode/Ready-to-use-Mobile-App-Template.git
  ```
- The AI will guide you through the setup process

### 2. Install Dependencies
- In the AI Agent, simply ask:
  ```
  Install all required dependencies
  ```
  or run manually:
  ```bash
  npm install
  ```

### 3. Start Development
- Ask the AI Agent:
  ```
  Start the development server
  ```
  or run manually:
  ```bash
  npm start
  ```
- Use the AI Agent to help with:
  - Running on specific platforms (iOS/Android/Web)
  - Building the app with EAS
  - Debugging issues
  - Adding new features

## Option B: Manual Setup

### 1. Clone the Repository
```bash
git clone https://github.com/MikeyNoCode/Ready-to-use-Mobile-App-Template.git
cd Ready-to-use-Mobile-App-Template
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment
1. Create a `.env` file in the root directory
2. Add your Supabase credentials:
   ```
   SUPABASE_URL=your_supabase_url_here
   SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

### 4. Start Development Server
```bash
# Start the development server
npm start

# Or run on specific platforms
npm run android   # Android
npm run ios       # iOS (requires macOS)
npm run web       # Web
```

## 📱 Building Your App

### Using EAS (Expo Application Services)

1. Install EAS CLI globally:
   ```bash
   npm install -g eas-cli
   ```

2. Log in to your Expo account:
   ```bash
   eas login
   ```

3. Configure your project:
   ```bash
   eas build:configure
   ```

4. Build your app:
   ```bash
   # For Android
   eas build -p android
   
   # For iOS (requires macOS)
   eas build -p ios
   ```

## 🛠 Project Structure

```
/
├── assets/           # Images, fonts, and other static files
├── components/       # Reusable UI components
├── config/           # Configuration files (API keys, etc.)
├── contexts/         # React context providers
├── hooks/            # Custom React hooks
├── navigation/       # Navigation configuration
├── screens/          # App screens
├── services/         # API services and business logic
├── styles/           # Global styles and themes
├── utils/            # Utility functions
├── .gitignore        # Git ignore file
├── app.json          # Expo configuration
├── babel.config.js   # Babel configuration
└── package.json      # Project dependencies
```

## 📚 Learning Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [Supabase Documentation](https://supabase.com/docs)
- [RevenueCat Documentation](https://docs.revenuecat.com/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/)
