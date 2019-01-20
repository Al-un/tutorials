import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Pouet from '../components/Pouet';

storiesOf('Button', module)
  .add('with text', () => <Button>Hello pouet Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Test/Plop', module)
  .addDecorator(story => <div style={{ textAlign: 'center' }}>{story()}</div>)
  .add('standard', () => <div>Plop</div>)
  .add('title', () => <h1>Plop</h1>);

storiesOf('Test/Pouet', module).add('standard', () => <Pouet />);
