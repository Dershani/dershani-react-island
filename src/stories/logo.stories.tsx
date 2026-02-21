import React from 'react';
import '@/styles.css';
import Logo from 'react_islands/logo';
import { preview } from '@/lib/preview';

const Component = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div
      className={`w-full ${theme === 'light' ? '' : 'bg-gray-800 text-white'} p-4`}
    >
      <Logo
        className={`size-10 ${theme === 'light' ? 'fill-blue-800' : 'fill-blue-200'}`}
      />
      Dershanı logosu
    </div>
  );
};

const meta = preview.meta({
  title: 'Dershani Logo',
  component: Component,
});

export default meta;

export const Light = meta.story({
  args: { theme: 'light' },
});

export const Dark = meta.story({
  args: { theme: 'dark' },
});
