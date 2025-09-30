import React, { createContext, useContext, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as Purchases from 'react-native-purchases';
import Constants from 'expo-constants';

const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [offerings, setOfferings] = useState(null);
  const [customerInfo, setCustomerInfo] = useState(null);
  const [isPro, setIsPro] = useState(false);

  // Initialize RevenueCat
  useEffect(() => {
    const setupRevenueCat = async () => {
      try {
        // For development with Expo Go, we'll skip initialization
        if (__DEV__ && !Constants.expoConfig.ios) {
          console.warn('⚠️ Running in development mode - RevenueCat is not initialized');
          setIsReady(true);
          return;
        }

        // TODO: Replace these with your actual RevenueCat API keys
        const APIKeys = {
          ios: 'appl_your_ios_api_key_here', // Should start with 'appl_'
          android: 'your_android_api_key_here', // Should start with 'goog_'
        };

        const apiKey = Platform.select({
          ios: APIKeys.ios,
          android: APIKeys.android,
          default: ''
        });

        if (!apiKey) {
          throw new Error('No API key found for this platform');
        }

        // Configure Purchases
        if (Purchases.setLogLevel) {
          Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
        }
        
        await Purchases.configure({ apiKey });

        // Get customer info and check subscription status
        const customerInfo = await Purchases.getCustomerInfo();
        setCustomerInfo(customerInfo);
        setIsPro(customerInfo.entitlements.active.pro !== undefined);

        // Load available offerings
        const offerings = await Purchases.getOfferings();
        setOfferings(offerings);

        setIsReady(true);
      } catch (error) {
        console.error('Error initializing RevenueCat:', error);
      }
    };

    setupRevenueCat();
  }, []);

  // Purchase a package
  const purchasePackage = async (pkg) => {
    if (__DEV__ && !Constants.expoConfig.ios) {
      console.warn('⚠️ Running in development mode - purchase simulation');
      // Simulate successful purchase in development
      const mockCustomerInfo = {
        entitlements: {
          active: { pro: { isActive: true } }
        }
      };
      setCustomerInfo(mockCustomerInfo);
      setIsPro(true);
      return { success: true, isPro: true };
    }

    try {
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      setCustomerInfo(customerInfo);
      const isProNow = customerInfo.entitlements.active.pro !== undefined;
      setIsPro(isProNow);
      return { success: true, isPro: isProNow };
    } catch (error) {
      if (error.userCancelled) {
        return { success: false, userCancelled: true };
      }
      console.error('Purchase error:', error);
      return { success: false, error: error.message || 'Purchase failed' };
    }
  };

  // Restore purchases
  const restorePurchases = async () => {
    if (__DEV__ && !Constants.expoConfig.ios) {
      console.warn('⚠️ Running in development mode - restore simulation');
      // Simulate successful restore in development
      const mockCustomerInfo = {
        entitlements: {
          active: { pro: { isActive: true } }
        }
      };
      setCustomerInfo(mockCustomerInfo);
      setIsPro(true);
      return { success: true, isPro: true };
    }

    try {
      const customerInfo = await Purchases.restorePurchases();
      setCustomerInfo(customerInfo);
      const isProNow = customerInfo.entitlements.active.pro !== undefined;
      setIsPro(isProNow);
      return { success: true, isPro: isProNow };
    } catch (error) {
      console.error('Restore purchases error:', error);
      return { success: false, error: error.message || 'Restore failed' };
    }
  };

  return (
    <PurchaseContext.Provider
      value={{
        isReady,
        offerings,
        customerInfo,
        isPro,
        purchasePackage,
        restorePurchases,
      }}>
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchase = () => {
  const context = useContext(PurchaseContext);
  if (context === undefined) {
    throw new Error('usePurchase must be used within a PurchaseProvider');
  }
  return context;
};
