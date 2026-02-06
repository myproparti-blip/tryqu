'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function VueJsRedirectPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the actual Vue page
        router.push('/technologies/vue');
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="text-center text-white">
                <p className="text-xl mb-4">Redirecting to Vue.js page...</p>
                <p className="text-gray-400">If you are not redirected, <a href="/technologies/vue" className="text-lime-400 hover:underline">click here</a></p>
            </div>
        </div>
    );
}
