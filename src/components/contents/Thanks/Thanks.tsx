import { SectionContainer } from '../../SectionContainer/SectionContainer';
import s from './Thanks.module.scss';

const AOS_ANCHOR = {
  ['data-aos-anchor-placement']: 'bottom-bottom',
  ['data-aos-anchor']: '#thanks-section',
  ['data-aos-duration']: 900,
  ['data-aos-delay']: 500,
};

export const Thanks = () => (
  <SectionContainer className={s.container}>
    <div id="thanks-section">
      <div data-aos="fade-down" {...AOS_ANCHOR}>
        The wedding of
      </div>
      <div className={s.name} data-aos="zoom-in" {...AOS_ANCHOR}>
        <span>Aira</span> & <span>Vigor</span>
      </div>
      <div data-aos="fade-up" {...AOS_ANCHOR}>
        Saturday, September 14th 2024
      </div>
    </div>
  </SectionContainer>
);
