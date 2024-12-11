import { InputJsonValue } from "../../types";

export type ParticipantCreateInput = {
  facebookLink?: string | null;
  furryName?: string | null;
  hasPreparedGift?: boolean | null;
  password?: number | null;
  refSheet?: InputJsonValue;
  wishlist?: string | null;
};
