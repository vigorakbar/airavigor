import s from './TableTransition.module.scss';
import { RSVP } from './components/RSVP/RSVP';
import { TimeAndVenue } from './components/TimeAndVenue/TimeAndVenue';
import { useTableItemsStyle } from './hooks';

export const TableTransition = () => {
  const { tableStyle, scrollAreaRef } = useTableItemsStyle();

  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div className={s.stickyContainer}>
        <div className={s.table} style={tableStyle}>
          <div
            className={s.tableItem}
            style={{
              left: '50vw',
            }}
          >
            <TimeAndVenue />
          </div>
          <div
            className={s.tableItem}
            style={{
              left: '200vw',
              top: '50vh',
            }}
          >
            <RSVP />
          </div>
        </div>
      </div>
    </div>
  );
};
