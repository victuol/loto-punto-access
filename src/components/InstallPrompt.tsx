import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "lp-install-dismissed";

/**
 * Install banner for the Loto Punto PWA.
 * Appears only when the browser fires `beforeinstallprompt` (Chromium),
 * or shows iOS Add-to-Home-Screen instructions on iOS Safari.
 */
export function InstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosHint, setShowIosHint] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(DISMISS_KEY) === "1") return;

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone) return;

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as BeforeInstallPromptEvent);
      setHidden(false);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    const ua = window.navigator.userAgent;
    const isIos = /iPad|iPhone|iPod/.test(ua) && !("MSStream" in window);
    const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
    if (isIos && isSafari) {
      setShowIosHint(true);
      setHidden(false);
    }

    const onInstalled = () => setHidden(true);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (hidden) return null;

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setHidden(true);
  };

  const install = async () => {
    if (!promptEvent) return;
    await promptEvent.prompt();
    const choice = await promptEvent.userChoice;
    if (choice.outcome === "accepted") setHidden(true);
    setPromptEvent(null);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-5">
      <div className="flex w-full max-w-xl items-center gap-4 rounded-2xl border border-glass-border bg-glass px-5 py-4 shadow-2xl backdrop-blur-2xl">
        <img
          src="/icons/icon-192.png"
          alt="Loto Punto app icon"
          width={44}
          height={44}
          loading="lazy"
          className="size-11 shrink-0 rounded-xl"
        />
        <div className="min-w-0 flex-1">
          <div className="font-display text-sm font-semibold text-ink">
            Install Loto Punto
          </div>
          <p className="mt-0.5 text-xs leading-relaxed text-ink/60">
            {showIosHint && !promptEvent
              ? "Tap Share, then “Add to Home Screen”."
              : "Add it to your home screen for instant, offline-ready access."}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {promptEvent ? (
            <button
              onClick={install}
              className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-deep transition-colors hover:bg-brand/90"
            >
              Install
            </button>
          ) : null}
          <button
            onClick={dismiss}
            aria-label="Dismiss install banner"
            className="rounded-lg border border-glass-border px-3 py-2 text-sm text-ink/70 transition-colors hover:bg-white/10"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
