import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const ParticipantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="facebookLink" source="facebookLink" />
        <TextInput label="furryName" source="furryName" />
        <BooleanInput label="hasPreparedGift" source="hasPreparedGift" />
        <NumberInput step={1} label="password" source="password" />
        <div />
        <TextInput label="wishlist" multiline source="wishlist" />
      </SimpleForm>
    </Create>
  );
};
