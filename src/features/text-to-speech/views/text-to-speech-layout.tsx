import { PageHeader } from '@/components/page-header';

interface Props {
  children: React.ReactNode;
}

const TextToSpeechLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <PageHeader title="Text to speech" />
      {children}
    </div>
  );
};

export default TextToSpeechLayout;
