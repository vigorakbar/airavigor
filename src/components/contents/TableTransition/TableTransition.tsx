import { useScrollAreaProgress } from '../../../hooks/useScrollProgress';
import s from './TableTransition.module.scss';
import { RSVP } from './components/RSVP/RSVP';
import { TimeAndVenue } from './components/TimeAndVenue/TimeAndVenue';
import { useTableItemsStyle } from './hooks';

export const TableTransition = () => {
  const { scrollAreaRef, progress } = useScrollAreaProgress();

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
