import React from 'react';
import Registration from '../components/auth/Registration';
import Login from '../components/auth/Login';
import TabPage from '../components/Tabs/TabPage';

export default function Auth() {
  return (
    <TabPage>
      <Login title="Login" />
      <Registration title="Registrering" />
    </TabPage>
  )
}
