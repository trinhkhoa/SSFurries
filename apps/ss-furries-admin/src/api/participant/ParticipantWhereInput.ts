import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ParticipantWhereInput = {
  facebookLink?: StringNullableFilter;
  furryName?: StringNullableFilter;
  hasPreparedGift?: BooleanNullableFilter;
  id?: StringFilter;
  password?: IntNullableFilter;
  refSheet?: JsonFilter;
  wishlist?: StringNullableFilter;
};
