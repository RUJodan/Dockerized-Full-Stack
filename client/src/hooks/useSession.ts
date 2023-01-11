import { useState } from 'react';
import { Session } from '../models/session';

export default function useSession() {
  const getSession = () => {
    const localUser = localStorage.getItem('session');
    if (localUser) {
      return JSON.parse(localUser);
    }

    return undefined;
  };

  const saveSession = (data: Session) => {
    localStorage.setItem('session', JSON.stringify(data));
    setSession(data);
  };

  const deleteSession = () => {
    localStorage.clear();
  };

  const [session, setSession] = useState(getSession());

  return {
    deleteSession,
    setSession: saveSession,
    session,
  };
}
