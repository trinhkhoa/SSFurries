import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  senderName?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
