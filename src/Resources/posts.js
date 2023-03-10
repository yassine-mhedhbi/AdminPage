import React from "react";
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, useRecordContext, NumberField } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
export const PostIcon = BookIcon;

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="date" />
            <NumberField source="isProject" />
            <TextField source="url" />
            <TextField source="url_img" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post { record ? `"${record.title}"` : '' }</span>;
};

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <DateInput label="Publication date" source="date" />
            <TextInput source="url" />
            <TextInput source="url_img" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create title="Create a Post">
        <SimpleForm>
             <TextInput source="title" />
            <DateInput label="Publication date" source="date" />
            <TextInput source="url" />
            <TextInput source="url_img" />
        </SimpleForm>
    </Create>
);