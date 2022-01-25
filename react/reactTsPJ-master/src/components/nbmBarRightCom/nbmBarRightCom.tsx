import React, { useEffect } from "react";
import { useSelector } from "../../redux/hooks";
import { getBarRight } from "../../redux/nbmBarRight/slice";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "./nbmBarRightCom.css";

// import "./swiper-bundle.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import { Navigation, Pagination } from "swiper";

export const BarRightComponent = () => {
  const loading = useSelector((state) => state.nbmCarousels.loading);
  const error = useSelector((state) => state.nbmCarousels.error);
  const nbmCarousels = useSelector((state) => state.nbmCarousels.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBarRight());
  }, [dispatch]);

  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  const { data } = nbmCarousels;

  return (
    <div id="banner1">
      <Swiper
        // spaceBetween={50}
        // slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {/* <!-- 配置了轮播图则显示后台配置的轮播图 --> */}
        {data.map((el, index) => (
          <SwiperSlide key={index} slide-order={index}>
            <a href={el.redirectUrl}>
              <img src={el.carouselUrl} alt="" />
            </a>
          </SwiperSlide>
        ))}
        {/* <!-- 未配置轮播图则显示默认的三张轮播图 --> */}
        {/* <SwiperSlide>
          <img src="../../assets/nbmImages/banner01.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/nbmImages/banner02.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../assets/nbmImages/banner03.jpg" alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
