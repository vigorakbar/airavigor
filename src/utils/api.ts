import { Gift, Rsvp, Wish, WishData, WishPageRequest } from './types';

const apiDomain: string = import.meta.env.VITE_API_DOMAIN || '';

async function postGift(gift: Gift): Promise<Gift> {
  try {
    const response = await fetch(`${apiDomain}/api/gifts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gift),
    });

    if (!response.ok) {
      throw new Error('Failed to submit gifts');
    }

    return await response.json();
  } catch (e) {
    console.error('Failed to post gifts');
    throw e;
  }
}

async function getWishesPage(request: WishPageRequest): Promise<WishData> {
  try {
    const response = await fetch(`${apiDomain}/api/wishes/get-page`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to get wishes');
    }

    return await response.json();
  } catch (e) {
    console.error('Failed to fetch wishes');
    throw e;
  }
}

async function postWish(wish: Wish): Promise<WishData> {
  try {
    const response = await fetch(`${apiDomain}/api/wishes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wish),
    });

    if (!response.ok) {
      throw new Error('Failed to submit wishes');
    }

    return await response.json();
  } catch (e) {
    console.error('Failed to post wishes');
    throw e;
  }
}

async function postRsvp(rsvp: Rsvp): Promise<Rsvp> {
  try {
    const response = await fetch(`${apiDomain}/api/rsvps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rsvp),
    });

    if (!response.ok) {
      throw new Error('Failed to submit rsvp');
    }

    return await response.json();
  } catch (e) {
    console.error('Failed to post rsvp');
    throw e;
  }
}

export { postGift, getWishesPage, postWish, postRsvp };
