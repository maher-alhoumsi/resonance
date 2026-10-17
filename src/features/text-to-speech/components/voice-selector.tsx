'use client';

import { useSelector } from '@tanstack/react-form';

import {
  Select,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectGroup,
  SelectTrigger,
  SelectContent,
  SelectSeparator,
} from '@/components/ui/select';
import { ttsFormOptions } from './text-to-speech-form';
import { Field, FieldLabel } from '@/components/ui/field';
import { useTypedAppFormContext } from '@/hooks/use-app-form';
import { useTTSVoices } from '../contexts/tts-voices-context';
import VoiceAvatar from '@/components/voice-avatar/voice-avatar';
import { VOICE_CATEGORY_LABELS } from '@/features/voices/data/voice-categories';

const VoiceSelector = () => {
  const form = useTypedAppFormContext(ttsFormOptions);
  const { customVoices, systemVoices, allVoices: voices } = useTTSVoices();

  const voiceId = useSelector(form.store, (s) => s.values.voiceId);
  const isSubmitting = useSelector(form.store, (s) => s.isSubmitting);

  const selectedVoice = voices.find((v) => v.id === voiceId);
  const hasMissingSelectedVoice = Boolean(voiceId) && !selectedVoice;
  const currentVoice = selectedVoice
    ? selectedVoice
    : hasMissingSelectedVoice
      ? { id: voiceId, name: 'Unavailable voice', category: null }
      : voices[0];

  return (
    <Field>
      <FieldLabel>Voice style</FieldLabel>
      <Select
        value={voiceId}
        disabled={isSubmitting}
        onValueChange={(v) => form.setFieldValue('voiceId', v ?? '')}
      >
        <SelectTrigger className="w-full h-auto gap-1 rounded-lg bg-white px-2 py-1">
          <SelectValue>
            {currentVoice && (
              <>
                <VoiceAvatar seed={currentVoice.id} name={currentVoice.name} />
                <span className="truncate text-sm font-medium tracking-tight">
                  {currentVoice.name}
                  {currentVoice.category &&
                    ` - ${VOICE_CATEGORY_LABELS[currentVoice.category]}`}
                </span>
              </>
            )}
          </SelectValue>
        </SelectTrigger>

        <SelectContent>
          {hasMissingSelectedVoice && currentVoice && (
            <>
              <SelectGroup>
                <SelectLabel>Selected Voice</SelectLabel>
                <SelectItem value={currentVoice.id}>
                  <VoiceAvatar
                    seed={currentVoice.id}
                    name={currentVoice.name}
                  />
                  <span className="truncate text-sm font-medium">
                    {currentVoice.name}
                    {currentVoice.category &&
                      ` - ${VOICE_CATEGORY_LABELS[currentVoice.category]}`}
                  </span>
                </SelectItem>
              </SelectGroup>

              {(customVoices.length > 0 || systemVoices.length > 0) && (
                <SelectSeparator />
              )}
            </>
          )}

          {customVoices.length > 0 && (
            <SelectGroup>
              <SelectLabel>Team Voices</SelectLabel>

              {customVoices.map((voice) => (
                <SelectItem key={voice.id} value={voice.id}>
                  <VoiceAvatar seed={voice.id} name={voice.name} />
                  <span>
                    {voice.name} - {VOICE_CATEGORY_LABELS[voice.category]}
                  </span>
                </SelectItem>
              ))}
            </SelectGroup>
          )}

          {customVoices.length > 0 && systemVoices.length > 0 && (
            <SelectSeparator />
          )}

          {systemVoices.length > 0 && (
            <SelectGroup>
              <SelectLabel>Built-in Voices</SelectLabel>

              {systemVoices.map((voice) => (
                <SelectItem key={voice.id} value={voice.id}>
                  <VoiceAvatar seed={voice.id} name={voice.name} />

                  <span>
                    {voice.name} - {VOICE_CATEGORY_LABELS[voice.category]}
                  </span>
                </SelectItem>
              ))}
            </SelectGroup>
          )}
        </SelectContent>
      </Select>
    </Field>
  );
};

export default VoiceSelector;
