// Gift.ts
export interface Gift {
  name: string;
  bankAccountName: string;
  notes?: string;
  invitationName?: string;
}

// Wish.ts
export interface Wish {
  name: string;
  wishes: string;
  date: number;
}

export interface WishPageRequest {
  page: number;
}

// Rsvp.ts
export interface Rsvp {
  name: string;
  totalPeople: number;
  willAttend: boolean;
  invitationName?: string;
}
