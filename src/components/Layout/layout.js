import React from 'react'
import Headers from './Header.js';
import Footers from './Footer.js';
import {Helmet} from 'react-helmet';
import {Toaster} from 'react-hot-toast';

const layout = ({title}) => {


  return (
   <>
   <Helmet>
 <title>{title}</title>
 </Helmet>
  <Headers/>
  {/* <Footers/> */}
   </>
  )
}

export default layout;