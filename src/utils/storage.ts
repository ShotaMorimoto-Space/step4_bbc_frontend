// localStorageの安全な使用のためのユーティリティ関数

export const getLocalStorageItem = (key: string): string | null => {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(`Error accessing localStorage for key ${key}:`, error);
    return null;
  }
};

export const setLocalStorageItem = (key: string, value: string): void => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error setting localStorage for key ${key}:`, error);
  }
};

export const removeLocalStorageItem = (key: string): void => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage for key ${key}:`, error);
  }
};

export const clearLocalStorage = (): void => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

export const getLocalStorageKeys = (): string[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    return Object.keys(localStorage);
  } catch (error) {
    console.error('Error getting localStorage keys:', error);
    return [];
  }
};
