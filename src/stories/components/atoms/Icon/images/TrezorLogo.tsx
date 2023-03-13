import React from 'react'

import { theme } from '~/stories/utils/theme'

const sizes = theme.icons.sizes

type Props = {
  iconSize: keyof typeof sizes
  interact: boolean
}

const TrezorLogo: React.FC<Props> = ({ iconSize, interact }) => {
  const px = sizes[iconSize]
  const hover = interact
    ? 'box-border fill-[#000] group-hover:fill-[#fff]'
    : 'fill-[#fff]'

  return (
    <svg
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={px}
      className='object-contain'
    >
      <path
        d='M15.8586 2.66797C12.2004 2.66797 9.2399 5.62847 9.2399 9.28665V11.7673C7.95529 11.9998 6.66699 12.3099 6.66699 12.7123V25.658C6.66699 25.658 6.66699 26.0161 7.06935 26.1859C8.52746 26.7765 14.2639 28.8068 15.5817 29.2719C15.7515 29.3346 15.7995 29.3346 15.8438 29.3346C15.9066 29.3346 15.9361 29.3346 16.1059 29.2719C17.4237 28.8068 23.1749 26.7765 24.633 26.1859C25.0059 26.0308 25.0206 25.6728 25.0206 25.6728V12.7123C25.0206 12.3099 23.7508 11.9851 22.4625 11.7673V9.28665C22.4809 5.62847 19.502 2.66797 15.8586 2.66797ZM15.8586 5.8315C18.0144 5.8315 19.3174 7.13456 19.3174 9.29034V11.4461C16.8995 11.2763 14.8361 11.2763 12.4034 11.4461V9.29034C12.4034 7.13087 13.7065 5.8315 15.8586 5.8315ZM15.8438 14.6207C18.8523 14.6207 21.3772 14.8533 21.3772 15.2704V23.3472C21.3772 23.4727 21.3625 23.4875 21.2517 23.5318C21.1447 23.5797 16.1207 25.3922 16.1207 25.3922C16.1207 25.3922 15.9176 25.455 15.8586 25.455C15.7958 25.455 15.5965 25.3775 15.5965 25.3775C15.5965 25.3775 10.5725 23.565 10.4654 23.517C10.3584 23.469 10.3399 23.4542 10.3399 23.3324V15.2556C10.3104 14.8385 12.8353 14.6207 15.8438 14.6207Z'
        className={hover}
      />
    </svg>
  )
}

export default TrezorLogo
