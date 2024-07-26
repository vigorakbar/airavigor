import { Gift, Rsvp, Wish, WishPageRequest } from './types';

async function postGift(gift: Gift): Promise<Response> {
  return fetch(`/api/gifts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gift),
  });
}

async function getWishesPage(request: WishPageRequest): Promise<Response> {
  return fetch(`/api/wishes/get-page`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });
}

async function postWish(wish: Wish): Promise<Response> {
  return fetch(`/api/wishes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wish),
  });
}

async function postRsvp(rsvp: Rsvp): Promise<Response> {
  return fetch(`/api/rsvps`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rsvp),
  });
}

export { postGift, getWishesPage, postWish, postRsvp };
