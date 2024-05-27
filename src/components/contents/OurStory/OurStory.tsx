import { SectionContainer } from '../../SectionContainer/SectionContainer';
import s from './OurStory.module.scss';

const stories = [
  {
    year: '2010',
    title: 'Our Journey Begin',
    story: `It all started when we first crossed paths during our junior high
  school days at the same school. We shared a special friendship that
  laid the foundation for something more.`,
  },
  {
    year: '2013',
    title: 'The Distance',
    story: `During high school, life took us on different paths, and we drifted
    apart. Although we weren't as close as before, we still met
    occasionally over the years.`,
  },
  {
    year: '2023',
    title: 'Rekindling the Flame',
    story: `Fast forward a decade later. A chance meeting reunited us. Fate
    intervened, and we met again. This time, in the bustling and vibrant
    cityscape, we rediscovered the connection we once had. Something
    magical sparked between us once again. The memories of our early years
    never faded.`,
  },
  {
    year: '2024',
    title: 'Sealing Our Fate and Sailing',
    story: `Now, after months of nurturing our rekindled connection, we stand here
    ready to embark on the next chapter of our journey together, creating
    a love story that transcends time and distance.`,
  },
];

export const OurStory = () => {
  return (
    <SectionContainer className={s.container}>
      <h1 className={s.title}>Our Story: A Journey Through Time</h1>
      {stories.map(({ year, title, story }) => (
        <div className={s.storyContainer}>
          <div className={s.storyTitle}>{year}</div>
          <div className={s.storyWrapper}>
            <h3 className={s.storyTitle}>{title}</h3>
            <p className={s.story}>{story}</p>
          </div>
        </div>
      ))}
    </SectionContainer>
  );
};
