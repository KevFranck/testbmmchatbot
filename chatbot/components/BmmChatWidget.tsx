"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

type BmmChatWidgetProps = {
  enabled: boolean;
  webhookUrl?: string;
};

export function BmmChatWidget({
  enabled,
  webhookUrl,
}: BmmChatWidgetProps) {
  useEffect(() => {
    if (!enabled || !webhookUrl) {
      return;
    }

    type ChatWindow = Window & {
      __bmmGuideChatApp?: {
        unmount?: () => void;
      };
      __bmmGuideChatInitialized?: boolean;
    };

    const chatWindow = window as ChatWindow;

    if (chatWindow.__bmmGuideChatInitialized) {
      return;
    }

    let cancelled = false;

    void import("@n8n/chat").then(({ createChat }) => {
      if (cancelled || chatWindow.__bmmGuideChatInitialized) {
        return;
      }

      chatWindow.__bmmGuideChatApp = createChat({
        webhookUrl,
        webhookConfig: {
          method: "POST",
          headers: {},
        },
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        showWelcomeScreen: false,
        showWindowCloseButton: true,
        loadPreviousSession: true,
        defaultLanguage: "en",
        initialMessages: [
          "Bonjour / Hello 👋",
          "Je suis BMM Guide. Je peux vous aider avec le mentorat, les inscriptions et les ressources d'admission en medecine au Canada.",
        ],
        i18n: {
          en: {
            title: "BMM Guide",
            subtitle: "Mentorship and medical school admission guidance",
            footer: "",
            getStarted: "New conversation",
            inputPlaceholder:
              "Posez votre question... / Ask your question...",
            closeButtonTooltip: "Close chat",
          },
        },
        metadata: {
          source: "bmm-website",
          chatbot: "BMM Guide",
          project: "BMM - Black Med Mentorship",
        },
        allowFileUploads: false,
        enableStreaming: false,
      });
      chatWindow.__bmmGuideChatInitialized = true;
    });

    return () => {
      cancelled = true;
      chatWindow.__bmmGuideChatApp?.unmount?.();
      delete chatWindow.__bmmGuideChatApp;
      delete chatWindow.__bmmGuideChatInitialized;
    };
  }, [enabled, webhookUrl]);

  if (!enabled) {
    return null;
  }

  if (!webhookUrl) {
    console.warn("NEXT_PUBLIC_N8N_CHAT_URL is not configured.");
    return null;
  }

  return null;
}
