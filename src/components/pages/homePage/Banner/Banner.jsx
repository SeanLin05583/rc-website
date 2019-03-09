import React from 'react';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);
export default class Banner extends React.Component {
  getBannerHeight = () => {
    return this.bannerContainer.getBoundingClientRect().height;
  }
  render() {
    return (
      <div className={cx('banner-container')} ref={ref => this.bannerContainer = ref}>
        <img className={cx('banner-img-web')} src={require('../../../../assets/img/banner_web.png')} />
        <img className={cx('banner-img-mobile')} src={require('../../../../assets/img/banner_mobile.png')} />
        <div className={cx('banner-filter')} />
        <div className={cx('banner-title-container')}>
          <h1 className={cx('banner-title')}>Sean Lin's profile</h1>
          <ul className={cx('banner-menu')}>
            <li>Skills</li>
            <li>Experiences</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}
