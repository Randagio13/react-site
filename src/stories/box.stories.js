import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import Box from '../components/Home/Page/Content/Articles/Boxes/Box'

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Default', () => (
    <Box
      icon={text('icon', 'piggy')}
      indexNum={text('indexNum', '01')}
      title={text('Title', 'Sapeva pure ca oggi je e te stevema inda sta machina')}
      subTitle={text('SubTitle', `Quann tu me purtast a spara chillu cristian p a prima vota.`)}
      showButton={boolean('showButton', true)}
      btnLabel={text('btnLabel', 'show more')}
    />
  ), {
    notes: 'Questo componente è stato stilato il pacchetto styled-components, di default onClick fa diventare il box un popup.'
  })
