import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { Title } from '../../Title/Title';
import s from './OurStory.module.scss';

const stories = [
  {
    year: '2010',
    title: 'Our Journey Begins',
    story: `It all started when we first crossed paths during our junior high
  school days at the same school. We shared a special friendship that
  laid the foundation for something more.`,
  },
  {
    year: '2013',
    title: 'The Distance',
    story: (
      <>
        During high school, life took us on
        <br /> different paths, and we drifted apart. Although we weren't as
        close as before,
        <br /> we still met occasionally over the years.
      </>
    ),
  },
  {
    year: '2023',
    title: 'Rekindling the Flame',
    story: `Fast forward a decade later. A chance meeting reunited us.
    We met again and rediscovered the connection we once had.
    The memories of our early years never faded.`,
  },
  {
    year: '2024',
    title: 'Sealing Our Fate and Sailing',
    story: `Now, after a year of nurturing our rekindled connection,
    we stand here ready to embark on the next chapter of our journey together`,
  },
];

export const OurStory = () => {
  return (
    <SectionContainer className={s.container}>
      <Title className={s.title}>
        Our Story:
        <br />A Journey Through Time
      </Title>
      {stories.map(({ year, title, story }, i) => (
        <div className={s.storyContainer} key={i}>
          <div className={s.year}>{year}</div>
          <div className={s.storyWrapper}>
            <h3 className={s.storyTitle}>{title}</h3>
            <p className={s.story}>{story}</p>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};
