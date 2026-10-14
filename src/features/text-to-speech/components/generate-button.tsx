'use client';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

interface Props {
  disabled: boolean;
  className?: string;
  onSubmit: () => void;
  isSubmitting: boolean;
  size?: 'default' | 'sm';
}

const GenerateButton = ({
  size,
  disabled,
  onSubmit,
  className,
  isSubmitting,
}: Props) => {
  return (
    <Button
      size={size}
      className={className}
      onClick={onSubmit}
      disabled={disabled}
    >
      {isSubmitting ? (
        <>
          <Spinner className="size-3" />
          Generating...
        </>
      ) : (
        'Generate speech'
      )}
    </Button>
  );
};

export default GenerateButton;
