import React from 'react';
import { SearchIcon, SpinnerIcon } from './ui/icons';

export default function Search() {
  const searching = false;

  return (
    <form role="search" className="relative">
      <input
        className="w-full pl-9! outline-offset-1"
        aria-label="Search contacts"
        name="q"
        placeholder="Search"
        type="search"
      />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
        {searching ? (
          <div className="h-fit w-fit animate-spin">
            <SpinnerIcon width={16} height={16} className="text-gray-dark" />
          </div>
        ) : (
          <SearchIcon width={16} height={16} className="text-gray-dark" />
        )}
      </div>
    </form>
  );
}
