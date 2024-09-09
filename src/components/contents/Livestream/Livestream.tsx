/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { Title } from '../../Title/Title';
import s from './Livestream.module.scss';
import ReactPlayer from 'react-player/youtube';

export const Livestream = ({
  toggleMusic: toggleBgMusic,
}: {
  toggleMusic: (forcePause?: boolean) => void;
}) => {
  return (
    <SectionContainer>
      <Title className={s.title}>Livestream</Title>
      <div
        className={s.wrapper}
        data-aos="fade"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        <ReactPlayer
          url="https://youtube.com/live/yvFawIddOwg?feature=share"
          onPlay={() => {
            toggleBgMusic(true);
          }}
          controls
        />
      </div>
    </SectionContainer>
  );
};
