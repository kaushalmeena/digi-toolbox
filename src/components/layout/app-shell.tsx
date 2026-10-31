"use client";

import { Menu, Search } from "lucide-react";
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { type ReactNode, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

import { SidebarContent } from "./app-sidebar";
import { Brand } from "./brand";
import { CommandMenuProvider, useOpenCommandMenu } from "./command-menu";

function MobileBar({ onMenu }: { onMenu: () => void }) {
  const openCommandMenu = useOpenCommandMenu();
  return (
    <div className="sticky top-0 z-30 flex h-12 shrink-0 items-center gap-2 border-b bg-background/85 px-2 backdrop-blur md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open navigation"
        onClick={onMenu}
      >
        <Menu />
      </Button>
      <Brand />
      <Button
        variant="ghost"
        size="icon"
        className="ml-auto"
        aria-label="Search tools"
        onClick={openCommandMenu}
      >
        <Search />
      </Button>
    </div>
  );
}

/**
 * The application frame: a fixed sidebar on desktop (a drawer on mobile) and
 * a main column that owns the page's scrolling, so tool panes can fill the
 * viewport like a native app window.
 */
export function AppShell({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    // Motion's animation features load lazily, and animations are skipped
    // for visitors who ask for reduced motion.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <CommandMenuProvider>
          <div className="flex h-dvh overflow-hidden">
            <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex">
              <SidebarContent />
            </aside>
            <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
              <SheetContent>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SidebarContent onNavigate={closeDrawer} />
              </SheetContent>
            </Sheet>
            <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
              <MobileBar onMenu={openDrawer} />
              <main className="flex min-h-0 flex-1 flex-col">{children}</main>
            </div>
          </div>
        </CommandMenuProvider>
      </MotionConfig>
    </LazyMotion>
  );
}
