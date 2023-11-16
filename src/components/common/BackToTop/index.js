import React, { useEffect, useState } from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './styles.css'

function BackToTop() {

    const [back,setBack] = useState(false);

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          setBack(true);
        } else {
           setBack(false);
        }
    }

    window.onscroll = function() {scrollFunction()};

    function topFunction() {
        // document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }


  return (
    <div className='back-to-top-btn' style={{display : `${back ? 'flex' : 'none' }`}} onClick={()=>topFunction()}><ArrowUpwardRoundedIcon style={{color : 'var(--blue)'}}/></div>
  )
}

export default BackToTop