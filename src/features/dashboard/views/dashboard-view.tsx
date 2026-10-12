import { PageHeader } from '@/components/page-header';
import { TextInputPanel } from '../components/text-input-panel';
import { DashboardHeader } from '../components/dashboard-header';
import { QuickActionsPanel } from '../components/quick-actions-panel';
import { HeroPattern } from '@/features/dashboard/components/hero-pattern';

export function DashboardView() {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <HeroPattern />

      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  );
}
