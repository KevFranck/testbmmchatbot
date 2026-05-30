import type { Metadata } from "next";
import { ChatbotLandingPage } from "@/components/ChatbotLandingPage";

export const metadata: Metadata = {
  title: "BMM Guide",
  description:
    "Site simple en une page pour tester BMM Guide avec un bouton de chat flottant.",
};

export default function Home() {
  return <ChatbotLandingPage />;
}
