export const WEDDING_DATE_TIMESTAMP = new Date(2024, 8, 14, 8).getTime(); // 14 September 2024, 9 AM

export const SECOND_IN_MS = 1000;
export const MINUTE_IN_MS = SECOND_IN_MS * 60;
export const HOUR_IN_MS = MINUTE_IN_MS * 60;
export const DAY_IN_MS = HOUR_IN_MS * 24;

export const PROGRESS_FINISHED_THRESHOLD = 0.75;

export const ASTON_GMAPS_LINK = 'https://maps.app.goo.gl/62up4dgdyENUnu8o7';
const title = "Aira & Vigor's Wedding";
const details =
  'With immense joy in our hearts, we invite you to witness and celebrate the next chapter of our love story as we embark on this journey together, towards forever';
const dates = '20240914T120000/20240914T150000';
const location = 'Aston Hotel Cirebon. Grand Sapphire Ballroom';

export const ADD_CALENDAR_LINK = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&dates=${encodeURIComponent(dates)}&location=${encodeURIComponent(location)}&ctz=Asia/Jakarta`;

export const DEFAULT_AOS = {
  ['data-aos-anchor-placement']: 'top-center',
  ['data-aos-duration']: 800,
  ['data-aos-delay']: 400,
};
