import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const ParticipantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="facebookLink" source="facebookLink" />
        <TextField label="furryName" source="furryName" />
        <BooleanField label="hasPreparedGift" source="hasPreparedGift" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="password" />
        <TextField label="refSheet" source="refSheet" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wishlist" source="wishlist" />
      </SimpleShowLayout>
    </Show>
  );
};
