import React, { useState } from 'react';
import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка
      </Button>
      <P size="l">Big</P>
      <P size="s">Medium</P>
      <P size="m">Small</P>
      <Tag size="s" color="ghost">
        smsaklsl
      </Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="m" color="green">
        green
      </Tag>
      <Tag size="m" color="primary">
        primary
      </Tag>
    </>
  );
}
