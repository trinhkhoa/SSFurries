import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="eventDate" source="eventDate" />
        <TextInput label="eventName" source="eventName" />
      </SimpleForm>
    </Edit>
  );
};
