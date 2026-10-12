import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import DashboardSidebar from '@/features/dashboard/components/dashboard-sidebar';
import { cookies } from 'next/headers';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen} className="h-svh">
      <DashboardSidebar />

      <SidebarInset className="min-w-0 min-h-0">
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
