import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { FormattedMessage } from 'react-intl';
import { LangSelector } from 'components/common';
import classNames from 'classnames/bind';
import style from './style.css';

const cx = classNames.bind(style);

const Banner = forwardRef((props, ref) => {
  const bannerContainer = useRef(null);
  const { onScrollToBlock, blockTitleList } = props;

  useImperativeHandle(ref, () => ({
    getBannerHeight: () => {
      return bannerContainer.current.getBoundingClientRect().height;
    },
    getBannerBottom: () => {
      return bannerContainer.current.getBoundingClientRect().bottom;
    }
  }));

  return (
    <div className={cx('banner-container')} ref={bannerContainer}>
      <img className={cx('banner-img-web')} src={require('../../../../assets/img/banner_web.png')} />
      <img className={cx('banner-img-mobile')} src={require('../../../../assets/img/banner_mobile.png')} />
      <div className={cx('banner-filter')} />
      <div className={cx('banner-title-container')}>
        <h1 className={cx('banner-title')}>
          <FormattedMessage id="profile.title" />
        </h1>
      </div>
      <div className={cx('banner-menu-container')}>
        <ul className={cx('banner-menu')}>
          {blockTitleList.map(blockObj =>
            <li key={blockObj.key} onClick={onScrollToBlock(blockObj.key)}>
              <FormattedMessage id={blockObj.intlId} />
            </li>
          )}
        </ul>
        <LangSelector />
      </div>
    </div>
  );
});

export default Banner;
