import type { Metadata } from "next";
import { BmmChatWidget } from "@/components/BmmChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BMM Guide",
    template: "%s | BMM Guide",
  },
  description:
    "Prototype Next.js pour tester BMM Guide dans une interface coherente avec l'univers visuel de Black Med Mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA" className="h-full antialiased">
      <body className="bmm-chat-theme flex min-h-full flex-col bg-background text-foreground">
        {children}
        <BmmChatWidget
          enabled={
            process.env.NEXT_PUBLIC_CHATBOT_TEST_ENABLED?.toLowerCase() !==
            "false"
          }
          webhookUrl={process.env.NEXT_PUBLIC_N8N_CHAT_URL}
        />
      </body>
    </html>
  );
}
