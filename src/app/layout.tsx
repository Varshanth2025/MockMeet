import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/client";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import {NuqsAdapter} from "nuqs/adapters/next"

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "MockMeet – Speak with your AI Agents",
  description: "Experience realistic AI-driven conversations and meetings.",
  icons: {
    icon: "/logo.svg", 
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
    <TRPCReactProvider>
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Toaster/>
        {children}
      </body>
    </html>
    </TRPCReactProvider>  
    </NuqsAdapter>
  );
}
