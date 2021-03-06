import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import style from './style.css';
import { FormattedMessage } from 'react-intl';

import imgAccupass from 'assets/img/logo_accupass.svg';
import imgAccupasMobile from 'assets/img/logo_accupass_mobile.png';
import imgLeo from 'assets/img/logo_leo.png';
import imgLeoMobile from 'assets/img/logo_leo_mobile.png';

const cx = classNames.bind(style);

const expList = [
  {
    duration: 'experience.accupass.duration',
    companyTitle: 'experience.accupass.name',
    jobTitle: 'experience.accupass.job.title',
    img: imgAccupass,
    imgMobile: imgAccupasMobile,
    imgStyle: 'exp-logo-accupass',
    jobDescriptionList: [
      'experience.accupass.job.website',
      'experience.accupass.job.support',
      'experience.accupass.job.git',
      'experience.accupass.job.refactor',
      'experience.accupass.job.ux',
    ],
    link: 'https://www.accupass.com',
  },
  {
    duration: 'experience.leo.duration',
    companyTitle: 'experience.leo.name',
    jobTitle: 'experience.leo.job.title',
    img: imgLeo,
    imgMobile: imgLeoMobile,
    imgCircle: false,
    imgStyle: 'exp-logo-leo',
    jobDescriptionList: ['experience.leo.job.maintain', 'experience.leo.job.develop'],
    link: 'http://www.leosys.com',
  },
];

const Experiences = forwardRef((props, ref) => {
  const renderExperiences = () => {
    return (
      <div className={cx('exp-inner')}>
        {expList.map((exp, index) => (
          <div key={index} className={cx('exp')}>
            <div className={cx('exp-pc-logo-container')}>
              <img className={cx(exp.imgStyle)} src={exp.img} />
            </div>
            <div className={cx('exp-progress-bar')}>
              <span />
              <span />
            </div>
            <section className={cx('exp-content-container')}>
              <div className={cx('exp-title')}>
                <span className={cx('exp-title-divider')} />
                <h3 className={cx('exp-title-time')}>
                  <FormattedMessage id={exp.duration} />
                </h3>
              </div>
              <div className={cx('exp-sub-title-container')}>
                <img className={cx('exp-logo-mobile', exp.imgStyle)} src={exp.imgMobile || exp.img} />
                <div className={cx('exp-sub-title')}>
                  <a className={cx('exp-company-title')} href={exp.link} target="_blank" rel="noreferrer noopener">
                    <FormattedMessage id={exp.companyTitle} />
                  </a>
                  <p className={cx('exp-job-title')}>
                    <FormattedMessage id={exp.jobTitle} />
                  </p>
                </div>
              </div>
              <div className={cx('exp-content')}>
                {exp.jobDescriptionList.map(descKey => (
                  <p key={descKey} className={cx('exp-job-description')}>
                    <FormattedMessage id={descKey} />
                  </p>
                ))}
              </div>
            </section>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div ref={ref} className={cx('exp-container')}>
      <h2 className={cx('exp-container-title')}>Experiences</h2>
      {renderExperiences()}
    </div>
  );
});

export default Experiences;
