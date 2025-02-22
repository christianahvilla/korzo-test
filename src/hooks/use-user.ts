import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@workos-inc/authkit-react';

type UserOrNull = ReturnType<typeof useAuth>['user'];

// redirects to the sign-in page if the user is not signed in
export const useUser = (): UserOrNull => {
  const { user, isLoading, signIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !user) {
      signIn({ state: { returnTo: location.pathname } });
    }
  }, [isLoading, location.pathname, signIn, user]);

  return user;
};
