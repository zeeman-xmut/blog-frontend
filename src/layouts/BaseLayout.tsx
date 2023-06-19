import { Navbar } from '@/components';
import { ScrollArea, rem } from '@mantine/core';
import type { FC, PropsWithChildren } from 'react';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <ScrollArea.Autosize
        type="hover"
        mah={`calc(100vh - ${rem(56)})`}
      >
        {children}
      </ScrollArea.Autosize>
    </>
  );
};
