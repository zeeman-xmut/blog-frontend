import {
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  Header,
  ScrollArea,
  Stack,
  clsx,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, type FC } from 'react';

export const Navbar: FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const router = useRouter();
  const mediaMatches = useMediaQuery(
    `(min-width: ${useMantineTheme().breakpoints.sm})`,
    true,
    {
      getInitialValueInEffect: false,
    },
  );

  useEffect(() => {
    close();
  }, [mediaMatches, router.asPath, close]);

  const links = [
    {
      href: '/',
      label: '首页',
    },
    {
      href: '/categories',
      label: '分类',
    },
    {
      href: '/tags',
      label: '标签',
    },
    {
      href: '/archives',
      label: '归档',
    },
  ];

  return (
    <>
      <Header
        height={rem(56)}
        className="sticky top-0"
      >
        <Container
          size="xl"
          className="flex h-full items-center justify-center"
        >
          <Flex className="flex-1 items-center justify-start">
            <Link
              href="/"
              aria-label="首页"
              className="flex items-center"
            >
              <MantineLogo size={28} />
            </Link>
          </Flex>
          <Group className="flex-2 items-center justify-center gap-x-1 max-sm:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex items-center justify-center rounded-sm px-3 py-2 text-sm leading-none no-underline',
                  router.pathname === link.href
                    ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:bg-opacity-[0.65]'
                    : 'text-black hover:bg-gray-50',
                )}
              >
                {link.label}
              </Link>
            ))}
          </Group>
          <Group className="flex-1 items-center justify-end gap-x-2 max-sm:hidden">
            <Button variant="light">登录</Button>
            <Button>注册</Button>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            className="sm:hidden"
          />
        </Container>
      </Header>
      <Drawer
        opened={opened}
        onClose={close}
        size={256}
        withCloseButton={false}
        classNames={{
          inner: 'top-14',
          body: 'p-0',
        }}
      >
        <ScrollArea.Autosize
          type="hover"
          mah={`calc(100vh - ${rem(56)})`}
        >
          <Stack className="gap-y-2 p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'flex items-center justify-start rounded-sm px-4 py-3 text-base leading-none no-underline',
                  router.pathname === link.href
                    ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:bg-opacity-[0.65]'
                    : 'text-black hover:bg-gray-50',
                )}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
          <Divider className="border-gray-100" />
          <Group className="gap-x-2 p-4">
            <Button
              variant="light"
              className="flex-1"
            >
              登录
            </Button>
            <Button className="flex-1">注册</Button>
          </Group>
        </ScrollArea.Autosize>
      </Drawer>
    </>
  );
};
