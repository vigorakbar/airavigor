import bgMusic from '../../assets/bg-music.mp3';
import pause from '../../assets/pause.png';
import play from '../../assets/play.png';
import s from './BgMusic.module.scss';

export const BgMusic = ({
  isPlaying,
  toggleMusic,
  audioRef,
}: {
  isPlaying: boolean;
  toggleMusic: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}) => {
  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 9999 }}>
      <audio ref={audioRef} loop>
        <source src={bgMusic} type="audio/mpeg" />
      </audio>
      <button className={s.controlWrapper} onClick={toggleMusic}>
        {isPlaying ? <img src={pause} /> : <img src={play} />}
      </button>
    </div>
  );
};
