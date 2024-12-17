
/* import mixpanel from "mixpanel-browser";

// Initialize mixpanel only on the client side
const initMixpanel = () => {
  if (typeof window === "undefined") return;

  try {
    // Only initialize once
    if (!(window as any).__MIXPANEL_INITIALIZED__) {
      mixpanel.init("02948b6369bba242c60d9483e873025d", {
        debug: true,
        track_pageview: true,
        persistence: "cookie", // Always use cookies to avoid localStorage issues
        api_host: "/mp",
        ignore_dnt: true,
        secure_cookie: true,
      });
      (window as any).__MIXPANEL_INITIALIZED__ = true;
    }
    return mixpanel;
  } catch (error) {
    console.error("Failed to initialize Mixpanel:", error);
    // Return a no-op implementation
    return {
      track: () => {},
      track_pageview: () => {},
      identify: () => {},
      people: { set: () => {} },
      reset: () => {},
    };
  }
};

// Singleton instance
let mixpanelInstance: typeof mixpanel | null = null;

// Get the mixpanel instance, initializing if necessary
export const getMixpanel = () => {
  if (!mixpanelInstance) {
    mixpanelInstance = initMixpanel();
  }
  return mixpanelInstance;
};

// Utility functions for common tracking operations
export const trackPageView = () => {
  const mp = getMixpanel();
  if (mp) {
    try {
      mp.track_pageview();
    } catch (error) {
      console.error("Failed to track pageview:", error);
    }
  }
};

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>,
) => {
  const mp = getMixpanel();
  if (mp) {
    try {
      mp.track(eventName, properties);
    } catch (error) {
      console.error(`Failed to track event ${eventName}:`, error);
    }
  }
};

export const identifyUser = (
  userId: string,
  userProperties?: Record<string, any>,
) => {
  const mp = getMixpanel();
  if (mp) {
    try {
      mp.identify(userId);
      if (userProperties) {
        mp.people.set(userProperties);
      }
    } catch (error) {
      console.error("Failed to identify user:", error);
    }
  }
};

export const resetUser = () => {
  const mp = getMixpanel();
  if (mp) {
    try {
      mp.reset();
    } catch (error) {
      console.error("Failed to reset user:", error);
    }
  }
};
*/
import mixpanel from "mixpanel-browser";

// تعریف نوع صحیح برای Mixpanel
type OverriddenMixpanel = typeof mixpanel;

// Initialize mixpanel only on the client side
const initMixpanel = (): OverriddenMixpanel | null => {
  if (typeof window === "undefined") return null;

  try {
    // Only initialize once
    if (!(window as any).__MIXPANEL_INITIALIZED__) {
      mixpanel.init("02948b6369bba242c60d9483e873025d", {
        debug: true,
        track_pageview: true,
        persistence: "cookie", // Always use cookies to avoid localStorage issues
        api_host: "/mp",
        ignore_dnt: true,
        secure_cookie: true,
      });
      (window as any).__MIXPANEL_INITIALIZED__ = true;
    }
    return mixpanel; // مقدار صحیح برمی‌گرداند
  } catch (error) {
    console.error("Failed to initialize Mixpanel:", error);
    // Return a no-op implementation
    return {
      track: () => {},
      track_pageview: () => {},
      identify: () => {},
      people: { set: () => {} },
      reset: () => {},
    } as unknown as OverriddenMixpanel;
  }
};

// Singleton instance
let mixpanelInstance: OverriddenMixpanel | null = null;

// Get the mixpanel instance, initializing if necessary
export const getMixpanel = (): OverriddenMixpanel => {
  if (!mixpanelInstance) {
    const instance = initMixpanel();
    if (!instance) {
      throw new Error("Mixpanel initialization failed.");
    }
    mixpanelInstance = instance;
  }
  return mixpanelInstance;
};

// Utility functions for common tracking operations
export const trackPageView = () => {
  const mp = getMixpanel();
  try {
    mp.track_pageview();
  } catch (error) {
    console.error("Failed to track pageview:", error);
  }
};

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>,
) => {
  const mp = getMixpanel();
  try {
    mp.track(eventName, properties);
  } catch (error) {
    console.error(`Failed to track event ${eventName}:`, error);
  }
};

export const identifyUser = (
  userId: string,
  userProperties?: Record<string, any>,
) => {
  const mp = getMixpanel();
  try {
    mp.identify(userId);
    if (userProperties) {
      mp.people.set(userProperties);
    }
  } catch (error) {
    console.error("Failed to identify user:", error);
  }
};

export const resetUser = () => {
  const mp = getMixpanel();
  try {
    mp.reset();
  } catch (error) {
    console.error("Failed to reset user:", error);
  }
};
