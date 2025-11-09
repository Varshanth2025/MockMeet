"use client";
import { Button } from "@/components/ui/button";
import { Plus, Video } from "lucide-react";
import Link from "next/link";
export const HomeView = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
      <h1 className="text-3xl font-semibold animate-green-gradient ">
        Welcome to MockMeet <span className="text-white"> 👋</span>
      </h1>

      <p className="text-gray-300 max-w-md">
        Start by <span className="text-green-400 font-medium">creating an AI Agent </span> 
        from your dashboard. Once it’s ready, 
        you can <span className="text-green-400 font-medium">launch a meeting</span> 
        and interact with it in real time.
      </p>

      <div className="flex gap-4 mt-4">
        <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold flex items-center gap-2">
         <Plus size={18} />  <Link href={"/agents"}> Create Agent </Link>
        </Button>
        <Button variant="outline" className="flex items-center gap-2 border-gray-500 text-gray-200">
          <Video size={18} /> <Link href={"/meetings"}> Start Meeting </Link>
        </Button>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Need help? Visit our <a href="#" className="underline text-green-400">Getting Started Guide</a>.
      </p>
    </div>
  );
};