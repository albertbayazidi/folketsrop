import React, { useEffect, useState } from 'react';

const NavBar = () => {
  function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  if (isMobile()) {
    console.log("Mobile device detected");
  } else {
    console.log("Desktop device detected");
  }

  return (
    <>
    </>
  );
}

export default NavBar;
