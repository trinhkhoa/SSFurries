import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const ParticipantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="facebookLink" source="facebookLink" />
        <TextInput label="furryName" source="furryName" />
        <BooleanInput label="hasPreparedGift" source="hasPreparedGift" />
        <NumberInput step={1} label="password" source="password" />
        <div />
        <TextInput label="wishlist" multiline source="wishlist" />
      </SimpleForm>
    </Edit>
  );
};
