import { redirect } from 'next/navigation';

import { auth } from '@clerk/nextjs/server';
import { DashboardView } from '@/features/dashboard/views/dashboard-view';

export default async function Home() {
  const { orgId } = await auth.protect();

  if (!orgId) redirect('/org-selection');

  return <DashboardView />;
}
