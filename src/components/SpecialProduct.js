import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
const SpecialProduct = ({product}) => {

  const navigate = useNavigate();

  return (
    <>
      <div className="col-6 mb-3 " >
        <div className="special-product-card cursor-pointer" onClick={()=>{

          navigate(`/product/${product._id}`);
          window.location.reload();
          window.scrollTo(0,0);
          }}>
          <div className="d-flex justify-content-between">
            <div>
              <img src={product?.images.length > 0 ? product?.images[0].url :  "/images/watch.jpg"} className="img-fluid" width={"80%"} height={"90%"} alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{product?.brand}</h5>
              <h6 className="title">
                {product?.title}
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={product?.totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">{product?.price}</span> &nbsp; <strike>{product?.price}</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count my-4">
                <p>Products: {product?.quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: product.quantity / product.quantity + product.sold * 100 }}
                    aria-valuenow={product.quantity / product.quantity + product.sold * 100}
                    aria-valuemin={product.quantity}
                    aria-valuemax={product.quantity + product.sold}
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;