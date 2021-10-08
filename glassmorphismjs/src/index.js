function glassmorphism(options) {
  let elements = document.querySelectorAll(".glassmorphism");

  switch (options.blur) {
    case 'hard':
      options.blur = '20px'
      break
    case 'middle':
      options.blur = '10px'
      break
    case 'none':
      options.blur = '0px'
      break
    default:
      options.blur = '5px'
  }
  //no obligatorio
  switch (options.transparency) {
    case 'hard':
      options.transparency = '0.7'
      break
    case 'normal':
      options.transparency = '0.3'
      break
    case 'none':
      options.transparency = '0'
      break
    default:
      options.transparency = '0.1'
  }

  if (options.color) {
    options.color = `rgba(${options.color}, ${options.transparency})`
  } else {
    options.color = `rgba( 255, 255, 255, ${options.transparency} )`
  }

  elements.forEach(element => {
    // //backgorund
    element.style.background = options.color

    // //boxshadow
    element.style.boxShadow = ` 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`;

    //blur
    element.style.backdropFilter = `blur(${options.blur})`
    element.style.WebkitBackdropFilter = `blur(${options.blur})`
    //border
    if (options.noBorder) {
      element.style.border = 'none';
    } else {
      element.style.border = '1px solid rgba( 255, 255, 255, 0.18 )';
    }

  });
}

export default glassmorphism