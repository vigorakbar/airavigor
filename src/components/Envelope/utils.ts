export const pullOutCard = async (card: HTMLDivElement) => {
  return setTimeout(() => {
    card.style.transform = 'translateY(-130px)';
  }, 300);
};

export const moveEnvelopeOut = async (
  setMoveEnvelopeOut: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return setTimeout(() => {
    setMoveEnvelopeOut(true);
  }, 1000);
};

export const placeCardForNextPage = (card: HTMLDivElement) => {
  card.style.transition = 'transform 0.4s ease-in';
  card.style.transform = 'translateY(130px)';
};
