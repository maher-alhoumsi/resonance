'use client';

import { useVoiceAvatar } from './use-voice-avatar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { cn } from '@/lib/utils';

interface Props {
  seed: string;
  name: string;
  className?: string;
}

const VoiceAvatar = ({ name, seed, className }: Props) => {
  const avatarUrl = useVoiceAvatar(seed);

  return (
    <Avatar className={cn('size-4 border-white shadow-xs', className)}>
      <AvatarImage src={avatarUrl} alt={name} />

      <AvatarFallback className="text-[8px]">
        {name.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default VoiceAvatar;
