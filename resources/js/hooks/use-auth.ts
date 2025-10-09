import { apiFetch } from "@/lib/fetch";
import { useAppStore } from "./use-app-store";
import { toast } from "sonner";
import type { User } from "@/types/model";

export function useAuth() {
  const lastRequestedUrl = useAppStore((state) => state.lastRequestedPath);
  const user = useAppStore((state) => state.user);
  const setUser = useAppStore((state) => state.setUser);
  const setLastRequestedUrl = useAppStore(
    (state) => state.setLastRequestedPath,
  );

  let status: "authenticated" | "unauthenticated" | "unknown" = "unknown";

  switch (user) {
    case null:
      status = "unauthenticated";
      break;
    case undefined:
      status = "unknown";
      break;
    default:
      status = "authenticated";
      break;
  }

  return {
    user,
    status,
    authenticate() {
      fetch("/api/csrf-token").then(() => {
        apiFetch<User>("/api/user")
          .then(setUser)
          .catch(() => {
            setUser(null);
          });
      });
    },
  };
}
