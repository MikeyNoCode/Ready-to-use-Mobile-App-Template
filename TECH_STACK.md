# Mobile App Tech Stack Documentation

## Overview
This document outlines the technology stack used in the mobile application.

## Core Technologies
- **React Native** v0.81.4 - Cross-platform mobile app development
- **Expo SDK** v54.0.0 - Development platform for React Native
- **JavaScript/JSX** - Primary programming language

## Navigation
- **React Navigation** v7.x
  - @react-navigation/native
  - @react-navigation/stack
  - @react-navigation/bottom-tabs

## Backend & Data
- **Supabase**
  - @supabase/supabase-js v2.39.0
  - Used for authentication and database services

## UI Components
- React Native Core Components
- React Native Reanimated v4.1.1
- React Native Gesture Handler v2.28.0
- React Native SVG v14.1.0
- Expo Vector Icons v15.0.2

## Development Tools
- Babel v7.20.0
- Metro Bundler
- npm v10.2.4
- Node.js >=16.0.0

## Project Structure
```
/
├── screens/           # App screens
│   ├── DashboardScreen.js
│   ├── HistoryScreen.js
│   ├── LoginScreen.js
│   ├── ProfileScreen.js
│   └── SignupScreen.js
├── contexts/          # React contexts
│   └── AuthContext.js
├── config/            # Configuration files
│   └── supabase.js
└── assets/            # Static assets
    └── icon.png
```

## Development Scripts
- `npm start` - Start the development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run clean` - Clean and reinstall dependencies
- `npm run reset` - Reset development environment

## Target Platforms
- iOS
- Android
- Web (via Expo Web)

## Requirements
- Node.js >=16.0.0
- npm >=8.0.0
- Expo CLI (for development)
- **Note**: Instead of local development environments (Xcode/Android Studio), you can use **EAS (Expo Application Services)** for building and publishing your app to both iOS and Android platforms.
