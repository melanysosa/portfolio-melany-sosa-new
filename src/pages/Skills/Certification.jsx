import React from 'react';
import useStyles from './useStyles';

export const Certification = ({ img, title,alt}) => {
  	const styles =useStyles();
	return (
    <div className={styles.certificationBox}>
      <p className={styles.titleCertification}>{title}</p>
      <img className={styles.imgCertification} src={img} alt={alt}/>
    </div>
  );
};
