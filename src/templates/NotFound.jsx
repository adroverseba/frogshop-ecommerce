import Link from 'next/link';
import React from 'react';
import styles from 'styles/NotFound.module.scss';

export const NotFound = () => {
  return (
    <div>
      <h1 className={styles['title-404']}>404</h1>
      <p className={styles['text-404']}>Oops! Pagina no encontrada.</p>
      <Link href="/">
        <button className={styles['button-404']}>Regrese a la página inicial.</button>
      </Link>
    </div>
  );
};
