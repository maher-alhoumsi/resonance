import { Metadata } from 'next';

import TextToSpeechView from '@/features/text-to-speech/views/text-to-speech-view';
import { trpc, HydrateClient, prefetch } from '@/trpc/server';

export const metadata: Metadata = {
  title: 'Text to speech',
};

interface Props {
  searchParams: Promise<{ text?: string; voiceId?: string }>;
}

const TextToSpeechPage = async ({ searchParams }: Props) => {
  const { text, voiceId } = await searchParams;

  prefetch(trpc.voices.getAll.queryOptions());

  return (
    <HydrateClient>
      <TextToSpeechView initialValues={{ text, voiceId }} />
    </HydrateClient>
  );
};

export default TextToSpeechPage;
