import React from 'react'
import { RetinaImage } from 'linkdrop-ui-kit'
import { getImages } from 'helpers'
import style from './styles.module'

class Header extends React.Component {
  render () {
    return <header className={style.container}>
      <RetinaImage width={170} {...getImages({ src: 'token_daily' })} />
    </header>
  }
}

export default Header
