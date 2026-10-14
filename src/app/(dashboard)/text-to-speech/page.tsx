import { Metadata } from 'next';

import TextToSpeechView from '@/features/text-to-speech/views/text-to-speech-view';

export const metadata: Metadata = {
  title: 'Text to speech',
};

const TextToSpeechPage = () => {
  return <TextToSpeechView />;
};

export default TextToSpeechPage;
