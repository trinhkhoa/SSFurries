import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  senderName?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
