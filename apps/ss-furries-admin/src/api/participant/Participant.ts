import { JsonValue } from "type-fest";

export type Participant = {
  createdAt: Date;
  facebookLink: string | null;
  furryName: string | null;
  hasPreparedGift: boolean | null;
  id: string;
  password: number | null;
  refSheet: JsonValue;
  updatedAt: Date;
  wishlist: string | null;
};
