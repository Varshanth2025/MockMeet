"use client";

import * as SidebarComponents from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";
const firstSection=[
    {
        icon:VideoIcon,
        label:"Meetings",
        href:"/meetings"
    },
    {
        icon:BotIcon,
        label:"Agents",
        href:"/agents",
    },
]

const secondSection=[
    {
        icon:StarIcon,
        label:"Upgrade",
        href:"/upgrade"
    }
    
]

export const DashboardSidebar=()=>{
const pathname=usePathname();

    return(
        <SidebarComponents.Sidebar>
            <SidebarComponents.SidebarHeader className="text-sidebar-accent-foreground ">
                <Link href="/" className="flex items-center gap-2 px-2   pt-2 ">
                <Image src="/logo.svg"height={36} width={36} alt="MockMeet Logo" />
                <p className="text-2xl font-semibold ">MockMeet</p>
                </Link>
            </SidebarComponents.SidebarHeader>

            <div className="px-4 py-2" >
                <Separator className="opacity-10 text-[#5D6B68]"></Separator>
            </div>
            <SidebarComponents.SidebarContent>

                <SidebarComponents.SidebarGroup>

                    <SidebarComponents.SidebarGroupContent>

                        <SidebarComponents.SidebarMenu>
                        {firstSection.map((item)=>(
                            <SidebarComponents.SidebarMenuItem key={item.href}>
                                <SidebarComponents.SidebarMenuButton asChild className={cn(
                                    "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                    pathname===item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10 "
                                )}isActive={pathname===item.href} >
                                    <Link href={item.href}>
                                    <item.icon className="size-5" />
                                    <span className="text-sm font-medium tracking-tight ">
                                        {item.label}
                                    </span>
                                    </Link>
                                </SidebarComponents.SidebarMenuButton>

                            </SidebarComponents.SidebarMenuItem>
                        ))}
                        </SidebarComponents.SidebarMenu>

                    </SidebarComponents.SidebarGroupContent>
                </SidebarComponents.SidebarGroup>
                 <div className="px-4 py-2" >
                <Separator className="opacity-10 text-[#5D6B68]"></Separator>
            </div>
                <SidebarComponents.SidebarGroup>

                    <SidebarComponents.SidebarGroupContent>

                        <SidebarComponents.SidebarMenu>
                        {secondSection.map((item)=>(
                            <SidebarComponents.SidebarMenuItem key={item.href}>
                                <SidebarComponents.SidebarMenuButton asChild className={cn(
                                    "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                    pathname===item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10 "
                                )}isActive={pathname===item.href} >
                                    <Link href={item.href}>
                                    <item.icon className="size-5" />
                                    <span className="text-sm font-medium tracking-tight ">
                                        {item.label}
                                    </span>
                                    </Link>
                                </SidebarComponents.SidebarMenuButton>

                            </SidebarComponents.SidebarMenuItem>
                        ))}
                        </SidebarComponents.SidebarMenu>

                    </SidebarComponents.SidebarGroupContent>
                </SidebarComponents.SidebarGroup>
            </SidebarComponents.SidebarContent>
                    <SidebarComponents.SidebarFooter className="text-white">
                        <DashboardUserButton/>

                    </SidebarComponents.SidebarFooter>
        </SidebarComponents.Sidebar>

    )
}