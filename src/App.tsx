import * as React from 'react';
import { useAuth } from '@/context/auth-context';
import { UnauthenticatedApp } from '@/unauthenticated-app';
import { AuthenticatedApp } from './authenticated-app';
// import { Switch, Route } from 'react-router-dom';

function App() {
  const { user } = useAuth();

  return <div className="App">{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
}

export default App;
