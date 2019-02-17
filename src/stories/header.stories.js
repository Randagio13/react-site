import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../components/Header'
import headerText from './header.md'

storiesOf('Header', module)
  .add('Logo and Menu', () => (
    <Header logoText='asdrubale' menuItems={[{label: 'lorem'}, {label: 'ipsum'}, {label: 'dolor'}]} />
  ), {
    notes: { markdown: headerText }
  })
