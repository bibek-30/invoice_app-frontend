import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="container w-full flex-center flex-col">
      <h1 className="head_text text-center">
        List and Manage <br />
        <span className="orange-gradient">
          Invoices relating to ABC Company
        </span>
      </h1>
      <p className="text-center desc">
        Promptotia is an open-source AI prompting tool for the modern world to
        discover, create, and share creative prompts.
      </p>
      <button>
        <Link href="/signIn">Login</Link>
      </button>
    </section>
  );
}
