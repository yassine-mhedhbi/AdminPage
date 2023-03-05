import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostCreate, PostEdit } from "./Resources/posts";
import { UserEdit, UserList, UserCreate } from "./Resources/users";
import "./App.css";

import authProvider, { httpClient } from "./Auth/authProvider";

function App() {
  return (
    <Admin
      dataProvider={jsonServerProvider(process.env.REACT_APP_API!, httpClient)}
      authProvider={authProvider}
      requireAuth
    >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name="projects"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
