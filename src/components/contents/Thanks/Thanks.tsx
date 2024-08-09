import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { Title } from '../../Title/Title';
import s from './Thanks.module.scss';

export const Thanks = () => (
  <SectionContainer className={s.container}>
    <Title className={s.title}>Thank You</Title>
  </SectionContainer>
);
