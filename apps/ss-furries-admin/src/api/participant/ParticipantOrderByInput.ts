import { SortOrder } from "../../util/SortOrder";

export type ParticipantOrderByInput = {
  createdAt?: SortOrder;
  facebookLink?: SortOrder;
  furryName?: SortOrder;
  hasPreparedGift?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  refSheet?: SortOrder;
  updatedAt?: SortOrder;
  wishlist?: SortOrder;
};
