/**
 * Registers the offline service worker — production origins only.
 *
 * Service workers are browser-held state and can keep serving stale HTML in
 * Lovable's preview/dev environments, so registration is skipped there and any
 * previously registered worker is unregistered.
 */
function isPreviewOrDevHost(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local") ||
    hostname.startsWith("id-preview--") ||
    hostname.includes("-dev.lovable.app") ||
    hostname.endsWith(".lovableproject.com")
  );
}

export function registerServiceWorker() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  if (isPreviewOrDevHost(window.location.hostname)) {
    void navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => void registration.unregister());
    });
    return;
  }

  window.addEventListener("load", () => {
    void navigator.serviceWorker.register("/service-worker.js", { scope: "/" });
  });
}
