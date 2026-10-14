import { z } from 'zod';
import { formOptions } from '@tanstack/react-form';

import { useAppForm } from '@/hooks/use-app-form';

const textToSpeechFormSchema = z.object({
  text: z.string().min(1, 'Please enter some text'),
  voiceId: z.string().min(1, 'Please select a voice'),
  topP: z.number(),
  topK: z.number(),
  temperature: z.number(),
  repetitionPenalty: z.number(),
});

export type TextToSpeechFormValues = z.infer<typeof textToSpeechFormSchema>;

export const defaultTTSValues: TextToSpeechFormValues = {
  text: '',
  voiceId: '',
  topP: 0.95,
  topK: 1000,
  temperature: 0.8,
  repetitionPenalty: 1.2,
};

export const ttsFormOptions = formOptions({
  defaultValues: defaultTTSValues,
});

interface Props {
  children: React.ReactNode;
  defaultValues?: TextToSpeechFormValues;
}

const TextToSpeechForm = ({ children, defaultValues }: Props) => {
  const form = useAppForm({
    ...ttsFormOptions,
    defaultValues: defaultValues ?? defaultTTSValues,
    validators: { onSubmit: textToSpeechFormSchema },

    onSubmit: async () => {
      // TODO: Generation logic will be added later
    },

    onSubmitInvalid: async ({ formApi }) => {
      // TODO: Handle invalid form submission
    },
  });

  return <form.AppForm>{children}</form.AppForm>;
};

export default TextToSpeechForm;
