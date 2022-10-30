import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <>
      <div>
        <Carousel fade>
          <Carousel.Item interval={1000}>
            <img
              className="w-100 p-0"
              src="https://res.cloudinary.com/hidl3r/image/upload/v1633112534/itp/bookbuttonimg_virvgj.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              style={{
                width: "100%",
              }}
              width="100"
              height="1200"
              //src="https://res.cloudinary.com/hidl3r/image/upload/v1633112534/itp/lapimg_oxr2tx.jpg"
              src="https://res.cloudinary.com/hidl3r/image/upload/v1631381654/itp/LeBus-interior-luxury-coach-bus-background_pdzuvu.jpg "
              fluid
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>
                Often travelling and looking for the best mode of
                transportation? Look no further with our Commuter Pass. Avoid
                the traffic, tolls and delays, all the while saving money.
              </h3>
              <p>Best value for money.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
