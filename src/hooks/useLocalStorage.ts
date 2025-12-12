import { useState, useEffect } from "react";

/**
 * A simple React hook for syncing primitive state with localStorage.
 *
 * Keeps your component state and localStorage value in sync,
 * even across multiple tabs.
 *
 * @template T Must be a serializable primitive (string, number, boolean, or null).
 * @param key The localStorage key to read and write.
 * @param initialValue The default value to use if the key is not found.
 * @returns [value, setValue, removeValue]
 *
 * @example
 * // Example usage:
 * import { useLocalStorage } from "@/hooks/useLocalStorage";
 *
 * function ThemeToggle() {
 *   const [theme, setTheme, clearTheme] = useLocalStorage<"light" | "dark">("theme", "light");
 *
 *   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
 *
 *   return (
 *     <div>
 *       <p>Current theme: {theme}</p>
 *       <button onClick={toggleTheme}>Toggle Theme</button>
 *       <button onClick={clearTheme}>Reset</button>
 *     </div>
 *   );
 * }
 */

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] {
  const readValue = (): T => {
    if (typeof window === "undefined") return initialValue;

    const item = window.localStorage.getItem(key);
    if (item === null) return initialValue;

    try {
      return JSON.parse(item) as T;
    } catch {
      return initialValue;
    }
  };

  const [value, setValue] = useState<T>(readValue);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn(`useLocalStorage: unable to store key "${key}"`, err);
    }
  }, [key, value]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(readValue());
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  const removeValue = () => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, removeValue];
}
