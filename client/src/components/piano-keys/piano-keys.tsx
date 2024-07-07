import { usePianoKeys } from './use-piano-keys';
import type { PianoKey as PianoKeyType } from '~/features/piano-keys';

export const PianoKeys = () => {
  const { pianoKeys, onPianoKeyPress, onPianoKeyRelease } = usePianoKeys();

  return (
    <div
      className="piano-keys-wrapper"
      onMouseDown={onPianoKeyPress}
      onMouseUp={onPianoKeyRelease}
      onMouseOver={onPianoKeyRelease}
      onMouseOut={onPianoKeyRelease}
    >
      {pianoKeys.map((pianoKey) => (
        <PianoKey key={pianoKey.id} {...pianoKey} />
      ))}
    </div>
  );
};

type PianoKeyProps = {
  id: PianoKeyType['id'];
  isPressed: PianoKeyType['isPressed'];
  type: PianoKeyType['type'];
};

const PianoKey = ({ id, isPressed, type }: PianoKeyProps) => {
  return (
    <button
      type="button"
      name="piano-key"
      className={clsx(
        type === 'natural' ? 'piano-key--white' : 'piano-key--black',
        isPressed && 'pressed-piano-key'
      )}
      value={id}
      aria-label={id}
    >
      {type === 'natural' && id}
    </button>
  );
};

const clsx = (...classNames: string[]) => {
  return classNames.filter(Boolean).join(' ');
};
