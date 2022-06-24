import Head from 'next/head';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Doce Weather</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Container>{props.children}</Container>
    </>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default Layout;
