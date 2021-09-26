import React from "react";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DeFi: YieldScan</title>

        <meta name="description" content="DeFi Polkadot and Kusama." />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center min-h-screen py-20 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100">
        <div>
          <h1 className="px-5 text-4xl font-bold leading-tight tracking-tight text-center sm:mt-4 sm:text-6xl">
            DeFi - YieldScan
          </h1>
          <h2 className="max-w-4xl px-10 mx-auto mt-8 text-base tracking-tight text-center text-gray-600 sm:text-2xl md:mt-5 md:text-2xl">
            Track latest analytics and rankings of different DeFi protocols on
            the Polkadot ecosystem.
          </h2>
        </div>
      </main>
    </div>
  );
}
