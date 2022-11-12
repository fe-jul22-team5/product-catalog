import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import right_arrow_icon from '../../img/icons/right-arrow-icon.svg';
import home_icon from '../../img/icons/home-icon.svg';
import pageNav from '../PageNav.module.scss';
import styles from '../PageCart/PageCart.module.scss';
import phoneStyles from './PhoneItemPage.module.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import card from '../../components/Card/Card.module.scss';

export const PhoneItemPage = React.memo(function PhoneItemPage() {
  const navigation = useNavigate();

  return (
    <>
      <div className={phoneStyles.navInfo}>
        <NavLink to="/" className={pageNav.navInfo__homeLink}>
          <img src={home_icon} alt="Home" />
        </NavLink>
        <img src={right_arrow_icon} alt="Arrow" className={pageNav.navInfo__arrow} />
        <NavLink to="/phones" className={pageNav.navInfo__title}>
        Phones
        </NavLink>
        <img src={right_arrow_icon} alt="Arrow" className={pageNav.navInfo__arrow} />
        <h4 className={pageNav.navInfo__title}> Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </h4>
      </div>

      <button
        className={styles.cart__backLink}
        onClick={() => navigation(-1)}
      >
        Back
      </button>


      <h1 className={phoneStyles.phoneItem__title}>
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className={phoneStyles.phoneItem__img_info_wrapper}>
        <div className={phoneStyles.phoneItem__carousel}>
          <Carousel>
            <div>
              <img src="https://media.istockphoto.com/photos/concept-picture-id1154231467" alt="" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1655745653127-4d6837baf958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1516527653392-602455dd9cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="" />
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1655365225165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="" />
            </div>
          </Carousel>
        </div>


        <div className={phoneStyles.phoneItem__short_info_wrapper}>
          <div className={phoneStyles.phoneItem__desktop_wrapper}>
            <div className={phoneStyles.phoneItem__colors_block}>
              <div className={phoneStyles.phoneItem__colors_block_title}>
                <h4 className={phoneStyles.phoneItem__colors_block_title_text}>
            Available colors
                </h4>
                <h4 className={phoneStyles.phoneItem__colors_block_title_text}>
            ID: 802390
                </h4>
              </div>

              <div className={phoneStyles.phoneItem__colors_block_colors_wrap}>
                <div className={phoneStyles.phoneItem__colors_block_color_radius}>
                  <div className={phoneStyles.phoneItem__colors_block_color}></div>
                </div>

                <div className={phoneStyles.phoneItem__colors_block_color_radius}>
                  <div className={phoneStyles.phoneItem__colors_block_color_2}></div>
                </div>

                <div className={phoneStyles.phoneItem__colors_block_color_radius}>
                  <div className={phoneStyles.phoneItem__colors_block_color_3}></div>
                </div>

                <div className={phoneStyles.phoneItem__colors_block_color_radius}>
                  <div className={phoneStyles.phoneItem__colors_block_color_4}></div>
                </div>

              </div>
            </div>

            <div className={phoneStyles.phoneItem__capacity_block}>
              <h4 className={phoneStyles.phoneItem__capacity_block_title}>
        Select capacity
              </h4>
              <div className={phoneStyles.phoneItem__capacity_block_gb_wrapper}>
                <div className={phoneStyles.phoneItem__capacity_block_gb}>64 gb </div>
                <div className={phoneStyles.phoneItem__capacity_block_gb}>256 gb</div>
                <div className={phoneStyles.phoneItem__capacity_block_gb}>512 gb</div>
              </div>

            </div>

            <div className={phoneStyles.phoneItem__price_block}>
              <p className={phoneStyles.phoneItem__price_new}>
          $799
              </p>
              <p className={phoneStyles.phoneItem__price_old}>
          $1199
              </p>
            </div>

            <div className={phoneStyles.phoneItem__btn_container}>
              <div className={card.phones_card__btns}>
                <button
                  className={card.phones_card__addBtn}
                >
          Add to cart
                </button>
                <button
                  className={card.phones_card__favoritesBtn}
                >
                  <span
                    className={
                      card.phones_card__favoritesBtn_heart
                    }
                  ></span>
                </button>
              </div>
            </div>

            <div className={phoneStyles.phoneItem__characteristics}>
              <ul className={card.phones_card__characteristic}>
                <li className={card.phones_card__characteristic_item}>
                  <span className={card.phones_card__characteristic_name}>
            Screen
                  </span>
                  <span className={card.phones_card__characteristic_num}>
            6.5” OLED
                  </span>
                </li>
                <li className={card.phones_card__characteristic_item}>
                  <span className={card.phones_card__characteristic_name}>
          Resolution
                  </span>
                  <span className={card.phones_card__characteristic_num}>
          2688x1242
                  </span>
                </li>
                <li className={card.phones_card__characteristic_item}>
                  <span className={card.phones_card__characteristic_name}>
            Processor
                  </span>
                  <span className={card.phones_card__characteristic_num}>
            Apple A12 Bionic
                  </span>
                </li>
                <li className={card.phones_card__characteristic_item}>
                  <span className={card.phones_card__characteristic_name}>
            RAM
                  </span>
                  <span className={card.phones_card__characteristic_num}>
            3 GB
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className={phoneStyles.phoneItem__about_spec_wrapper}>
        <div className={phoneStyles.phoneItem__about_wrapper}>
          <h2 className={phoneStyles.phoneItem__about_title}>
        About
          </h2>

          <p className={phoneStyles.phoneItem__about_text}>
        A transformative triple‑camera system that adds tons of capability without complexity.

        An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
          </p>
        </div>

        <div className={phoneStyles.phoneItem__specs_wrapper}>
          <h2 className={phoneStyles.phoneItem__specs_title}>
        Tech specs
          </h2>
          <div className={phoneStyles.phoneItem__specs_table}>
            <ul className={card.phones_card__characteristic}>
              <li className={card.phones_card__characteristic_item}>
                <span className={card.phones_card__characteristic_name}>
            Screen
                </span>
                <span className={card.phones_card__characteristic_num}>
            6.5” OLED
                </span>
              </li>
              <li className={card.phones_card__characteristic_item}>
                <span className={card.phones_card__characteristic_name}>
          Resolution
                </span>
                <span className={card.phones_card__characteristic_num}>
          2688x1242
                </span>
              </li>
              <li className={card.phones_card__characteristic_item}>
                <span className={card.phones_card__characteristic_name}>
            Processor
                </span>
                <span className={card.phones_card__characteristic_num}>
            Apple A12 Bionic
                </span>
              </li>
              <li className={card.phones_card__characteristic_item}>
                <span className={card.phones_card__characteristic_name}>
            RAM
                </span>
                <span className={card.phones_card__characteristic_num}>
            3 GB
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
