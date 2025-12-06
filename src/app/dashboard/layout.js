import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata = {
  title: "Avvance Dashboard",
};

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* Adicionado w-full para garantir a largura correta */}
      <div className="w-full">
        {/* Margem ajustada para mobile (ml-4) e desktop (ml-8) */}
        <SidebarTrigger className="mt-4 ml-4 md:ml-8" />

        {/* Padding drasticamente reduzido no mobile (p-4) e margem esquerda ajustada */}
        <main className="min-h-screen flex flex-col gap-8 p-4 md:p-12 md:ml-4">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
