import React from "react";
import "./ecommerce.css";
import lappy from "../Assets/lappy.jpg";
import cubic from "../Assets/cubic1.png";
import flattv from "../Assets/Flat-TVs.jpg";
import tv from "../Assets/tv.jpeg";
import airpod from "../Assets/airpod.jpg";
import powerbank from "../Assets/powerbank.jpg";
import addidas from "../Assets/addidas.jpg";




import Navbar1 from "../components/navbar1";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ECommerce = () => {
  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
    <div>
      <Navbar1 />
      <div className="container">
      <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  responsive={responsive}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
>
  <div><img className="card-img-top" src={flattv} alt="Card" /></div>
  <div><img className="card-img-top mx-3" src={cubic} alt="Card" /></div>
  <div><img className="card-img-top mx-3" src={airpod} alt="Card" /></div>
  <div><img className="card-img-top mx-3" src={powerbank} alt="Card" /></div>
  <div><img className="card-img-top mx-3" src={addidas} alt="Card" /></div>



  
  <div><img className="card-img-top" src={tv} alt="Card" /></div>
  <div><img className="card-img-top" src={lappy} alt="Card" /></div>
  <div><img className="card-img-top" src={lappy} alt="Card" /></div>
</Carousel>;
        <div className="row mt-5">
          <div className="col-md-3 cardd">
            <div className="card shop-card2" style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">Laptop</h4>
                <p className="card-text">
                  #190.000{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p>Same day delivery</p>
                <button className="p-2 btn btn-light form-control btn-n">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>
                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card " />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>
                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Carousel>
          <div>
            <div className="col-md-3">
              <div className="card " style={{ width: "200px" }}>
                <img className="card-img-top" src={lappy} alt="Card image" />
                <div className="card-body">
                  <p className="card-title">Laptop</p>
                  <p className="card-text">
                    <b>#190.000</b>{" "}
                    <span>
                      <strike>#200.000</strike>
                    </span>
                  </p>
                  <p className="p-text">Same day delivery</p>

                  <button className=" btn-cart p-2">Add to Cart</button>
                </div>
              </div>
            </div>
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <div className="col-md-3">
              <div className="card " style={{ width: "200px" }}>
                <img className="card-img-top" src={lappy} alt="Card image" />
                <div className="card-body">
                  <p className="card-title">Laptop</p>
                  <p className="card-text">
                    <b>#190.000</b>{" "}
                    <span>
                      <strike>#200.000</strike>
                    </span>
                  </p>
                  <p className="p-text">Same day delivery</p>

                  <button className=" btn-cart p-2">Add to Cart</button>
                </div>
              </div>
            </div>
            <p className="legend">Legend 2</p>
          </div>
          <div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card image" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}

<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  responsive={responsive}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
>
  <div><img className="card-img-top" src={lappy} alt="Card" /></div>
  <div><img className="card-img-top" src={lappy} alt="Card" /></div>
  <div><img className="card-img-top" src={lappy} alt="Card" /></div>
  <div><img className="card-img-top" src={lappy} alt="Card" /></div>
</Carousel>;

        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>
                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card " />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card " />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card " />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card " />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card " />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card " style={{ width: "200px" }}>
              <img className="card-img-top" src={lappy} alt="Card" />
              <div className="card-body">
                <p className="card-title">Laptop</p>
                <p className="card-text">
                  <b>#190.000</b>{" "}
                  <span>
                    <strike>#200.000</strike>
                  </span>
                </p>
                <p className="p-text">Same day delivery</p>

                <button className=" btn-cart p-2">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
