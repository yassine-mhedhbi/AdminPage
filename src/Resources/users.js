import React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext, NumberField } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const PostIcon = BookIcon;

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

const UsertTitle = () => {
    const record = useRecordContext();
    return <span>User { record ? `"${record.username}"` : '' }</span>;
};

export const UserCreate = () => (
    <Edit title={<UsertTitle />}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const UserEdit = () => (
    <Edit title={<UsertTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="username" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);
