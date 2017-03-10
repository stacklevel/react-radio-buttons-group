import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { ReactRadioButtonsGroup, ReactRadioButton } from '../build/bundle';

storiesOf('ReactRadioButtonsGroup', module)
  .add('Male and Female example', () => (
     <div style={{ fontFamily: 'sans-serif' }}>
         <ReactRadioButtonsGroup group='sex' onChange={action('changed')}>
             <ReactRadioButton value='male'>Male 👨</ReactRadioButton>
             <ReactRadioButton value='female'>Female 👩</ReactRadioButton>
         </ReactRadioButtonsGroup>
     </div>
  ))
  .add('Specialty example', () => (
     <div style={{ fontFamily: 'sans-serif' }}>
         <ReactRadioButtonsGroup group='specialty' onChange={action('changed')}>
             <ReactRadioButton value='student'>Student 👨‍🎓</ReactRadioButton>
             <ReactRadioButton value='cook'>Cook 👨‍🍳</ReactRadioButton>
             <ReactRadioButton value='mechanic'>Mechanic 👨‍🔧</ReactRadioButton>
             <ReactRadioButton value='scientist'>Scientist 👨‍🔬‍</ReactRadioButton>
         </ReactRadioButtonsGroup>
     </div>
  ));
