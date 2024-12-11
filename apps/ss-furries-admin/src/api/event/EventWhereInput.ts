import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  eventDate?: DateTimeNullableFilter;
  eventName?: StringNullableFilter;
  id?: StringFilter;
};
