import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ParticipantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Participants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="facebookLink" source="facebookLink" />
        <TextField label="furryName" source="furryName" />
        <BooleanField label="hasPreparedGift" source="hasPreparedGift" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="password" />
        <TextField label="refSheet" source="refSheet" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="wishlist" source="wishlist" />{" "}
      </Datagrid>
    </List>
  );
};
