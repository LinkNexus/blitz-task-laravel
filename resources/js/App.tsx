import { useEffect } from "react";
import { useAuth } from "./hooks/use-auth";
import { apiFetch } from "./lib/fetch";

export function App() {
  const { user, authenticate } = useAuth();

  useEffect(authenticate, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col"></div>
  );
}
