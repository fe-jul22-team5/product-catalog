import React, { useCallback } from 'react';
import logo from './img/full_logo.png';
import styles from './Footer.module.scss';


export const Footer = React.memo(function Footer() {

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <a href="/">
            <img className='footer__logo' src={logo} alt="full__logo" />
          </a>
        </div>
        <ul className={styles.footer__info}>
          <li className={styles.footer__info_item}>
            <a className={styles.footer__info_link} href="#">Github</a>
          </li>
          <li className={styles.footer__info_item}>
            <a className={styles.footer__info_link} href="#">Contacts</a>
          </li>
          <li className={styles.footer__info_item}>
            <a className={styles.footer__info_link} href="#">Rights</a>
          </li>
        </ul>
        <button
          className={styles.footer__toTop}
          onClick={handleScrollToTop}
        >
          <span className={styles.footer__toTop_text}>Back to top</span>
          <span className={styles.footer__toTop_link}></span>
        </button>
      </div>
    </div>
  );
});
