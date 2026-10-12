import { redirect } from 'next/navigation';

import { auth } from '@clerk/nextjs/server';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

export default async function Home() {
  const { orgId } = await auth.protect();

  if (!orgId) redirect('/org-selection');

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
        <h1 className="text-2xl font-semibold">Welcome to the Resonance</h1>

        <div className="flex items-center gap-4">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </>
  );
}
