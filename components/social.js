import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  return (
    <ul className={styles.list}>
      <FontAwesomeIcon icon={faTwitter} />
      <span className='sr-only'>Twitter</span>
      <FontAwesomeIcon icon={faFacebookF} />
      <span className='sr-only'>Facebook</span>
      <FontAwesomeIcon icon={faGithub} />
      <span className='sr-only'>GitHub</span>
    </ul>
  )
}

export default Social
