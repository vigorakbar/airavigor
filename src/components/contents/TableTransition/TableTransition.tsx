import s from './TableTransition.module.scss';
import { RSVP } from './components/RSVP/RSVP';
import { SubProgressBar } from './components/SubProgressBar/SubProgressBar';
import { TimeAndVenue } from './components/TimeAndVenue/TimeAndVenue';
import { useTableItemsStyle } from './hooks';

export const TableTransition = () => {
  const { tableStyle, scrollAreaRef, progressBar1Ref, progressBar2Ref } =
    useTableItemsStyle();

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
            <SubProgressBar ref={progressBar1Ref} />
            <TimeAndVenue />
          </div>
          <div
            className={s.tableItem}
            style={{
              left: '200vw',
              top: '50vh',
            }}
          >
            <SubProgressBar ref={progressBar2Ref} />
            <RSVP />
          </div>
        </div>
      </div>
    </div>
  );
};
