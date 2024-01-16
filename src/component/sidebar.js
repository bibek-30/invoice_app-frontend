import Link from 'next/link';
import React from 'react';


const Sidebar = () => {
  return (
      <div className="sidebar">
        <ul>
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
  );
}

export default Sidebar