'use client';

import { useSelector } from '@tanstack/react-form';

import { sliders } from '../data/sliders';
import { Slider } from '@/components/ui/slider';
import { ttsFormOptions } from './text-to-speech-form';
import { useTypedAppFormContext } from '@/hooks/use-app-form';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import VoiceSelector from './voice-selector';

const SettingsPanelSettings = () => {
  const form = useTypedAppFormContext(ttsFormOptions);

  const isSubmitting = useSelector(form.store, (state) => state.isSubmitting);

  return (
    <>
      {/* Voice Style Dropdown Section */}
      <div className="border-b border-dashed p-4">
        <VoiceSelector />
      </div>

      {/* Voice Adjustments Section */}
      <div className="p-4 flex-1">
        <FieldGroup className="gap-8">
          {sliders.map((slider) => (
            <form.Field key={slider.id} name={slider.id}>
              {(field) => (
                <Field>
                  <FieldLabel>{slider.label}</FieldLabel>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {slider.leftLabel}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {slider.rightLabel}
                    </span>
                  </div>

                  <Slider
                    min={slider.min}
                    max={slider.max}
                    step={slider.step}
                    disabled={isSubmitting}
                    value={[field.state.value]}
                    onValueChange={(value) =>
                      field.handleChange(value as number)
                    }
                    className="**:data-[slot=slider-thumb]:size-3 **:data-[slot=slider-thumb]:bg-foreground **:data-[slot=slider-track]:h-1"
                  />
                </Field>
              )}
            </form.Field>
          ))}
        </FieldGroup>
      </div>
    </>
  );
};

export default SettingsPanelSettings;
