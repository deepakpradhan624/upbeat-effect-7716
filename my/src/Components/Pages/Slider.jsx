import React from "react";
import { Carousel } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-100"
            src="https://modesens.com/banner/14398/getimg/?img=%2Fbanner%2F20221212-modesens-HolidaySale-1140x400-EN_1670831157.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-100"
            src="https://modesens.com/banner/14517/getimg/?img=%2Fbanner%2F20221218-modesens-NAP-1140x400-EN.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-100"
            src="https://modesens.com/banner/14520/getimg/?img=%2Fbanner%2F20221218-modesens-Ralph-1140x400-F-EN.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-100"
            src="https://modesens.com/banner/14523/getimg/?img=%2Fbanner%2F20221219-modesens-Giglio-1140x400-EN.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            onClick={() => navigate("/login")}
            className="d-block w-100"
            src="https://modesens.com/banner/14521/getimg/?img=%2Fbanner%2F20221218-modesens-Foreo-1140x400-EN.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;