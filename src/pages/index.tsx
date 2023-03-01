import { AuthContext } from '@/context/AuthContext';
import Head from 'next/head';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Home</title>
      </Head>

      <div className="max-w-sm w-full space-y-8">Ola</div>
    </div>
  );
}
