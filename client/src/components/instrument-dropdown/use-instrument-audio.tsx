import { useDispatch } from 'react-redux';
import { loadAudioSamples } from '~/features/audio';
import type { AppDispatch } from '~/features/store';

export const useInstrumentAudio = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loadAudio = (instrument: string) => {
    return dispatch(loadAudioSamples(instrument)).unwrap();
  };

  return { loadAudio };
};
