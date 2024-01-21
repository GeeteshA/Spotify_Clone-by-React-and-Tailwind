import React from 'react';
import {Icon} from 'components/Icons';
import { useHistory } from 'react-router-dom'


export default function Navigation() {
    
    const history = useHistory();
    
    /* Set the width of the side navigation to 0 */


  return (
    <div className='flex' id='rl_btn'>

    <button onClick={() => history.goBack()} className='bg-brenk p-[6px] rounded-full items-center mr-3'>
      <Icon name="back" />
    </button>
    <button onClick={() => history.goForward()} className='bg-brenk p-[6px] rounded-full items-center mr-2'>
      <Icon name="next" />
    </button>
   

  </div>
  )
}
