
'use client'
import { SessionProvider } from 'next-auth/react';
import React from 'react';

function NextAuthProviders({children}) {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
}

export default NextAuthProviders