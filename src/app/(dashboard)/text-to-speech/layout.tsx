import TextToSpeechLayout from '@/features/text-to-speech/views/text-to-speech-layout';

interface Props {
  children?: React.ReactNode;
}

const SpechToTextLayout = ({ children }: Props) => {
  return <TextToSpeechLayout>{children}</TextToSpeechLayout>;
};

export default SpechToTextLayout;
