import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { AppSidebar } from '@/components/app-sidebar';
import { Header } from '@/components/header/header';
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from '@/components/ui/toaster';

import { siteConfig } from '@/constant/config';
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <SidebarProvider>
          <div className="mx-auto w-full border-border/40 dark:border-border">
            <Header />
            <main className="flex-1 flex flex-row">
              <AppSidebar />
              <div className="flex-1 p-7">
                {children}
              </div>
            </main>
          </div>
        </SidebarProvider>
        <Toaster />
        <footer>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.title}
          </p>
        </footer>
      </body>
    </html>
  );
}
