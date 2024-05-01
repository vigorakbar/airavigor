import { useScrollAreaProgress } from '../../../hooks/useScrollProgress';
import s from './TableTransition.module.scss';
import { TimeAndVenue } from './components/3TimeAndVenue/TimeAndVenue';
import { RSVP } from './components/4RSVP/RSVP';
import { useTableItemsStyle } from './hooks';

export const TableTransition = () => {
  const { scrollAreaRef, progress } = useScrollAreaProgress();

  console.log('var progress', progress);

  const { tableStyle, timeVenueStyle, rsvpStyle } =
    useTableItemsStyle(progress);

  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div className={s.stickyContainer}>
        <div className={s.table} style={tableStyle}>
          <div className={s.tableItem} style={timeVenueStyle}>
            <TimeAndVenue />
          </div>
          <div className={s.tableItem} style={rsvpStyle}>
            <RSVP />
          </div>
        </div>
      </div>
    </div>
  );
};
