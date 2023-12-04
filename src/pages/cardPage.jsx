import React, { useState } from "react";

import Card from "@/components/CardList/Card";
import Banner from "@/components/Banner";


function CardPage(products) {
  const [cart, setCart] = useState([]);

  const selectedProducts = products.products.slice(0, 8);

  const handleGoToProductDetail = (productId) => {
    // Use window.location to navigate
    window.location.href = `/productDetail/${productId}`;
  };

  const handleAddToCart = (selectedProduct) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item._id === selectedProduct._id
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment the count
      updatedCart[existingProductIndex].count += 1;
    } else {
      // If the product is not in the cart, add it with count 1
      updatedCart.push({ ...selectedProduct, count: 1 });
    }

    // Set the updated cart in state
    setCart(updatedCart);

    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // Optionally, you can also update the state or perform other actions if needed
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12 ">
            <Banner
              image="https://theme.hstatic.net/1000160337/1000885200/14/categorybanner_1_img.jpg?v=316"
              caption="Dòng chibi figure được yêu thích nhất,
                  nhiều gương mặt, thoả sức tạo dáng"
              title="COMMING SOON"
              name="Nendoroid"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 ">
            <Banner
              image="https://theme.hstatic.net/1000160337/1000885200/14/categorybanner_1_img.jpg?v=316"
              caption="Dòng scale figure kích thước sinh viên,
                     giá tiểu học"
              title="COMMING SOON"
              name="Pop Up Parade"
            />
          </div>
        </div>
      </div>

      <div className={`${x["section"]}`}>
        <div className={`${x["section-heading"]}`}>
          <h2 className={`${x["hTitle"]}`}>
            <a href="">Sản Phẩm Order</a>
          </h2>
          <p>Những sản phẩm đã hoặc sắp phát hành & cần đặt trước</p>
        </div>
      </div>

      <div className=" container wrapper">
        <div className="d-flex row justify-content-around">
          <div className="col-12 col-md-12 col-lg-4">
            <div className={`${x["groupbanner-hover"]}`}>
              <img
                className={`lazyloaded ls-is-cached ${x["images"]}`}
                src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=316"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-8">
            <div className="d-flex row">
              {selectedProducts.map((product) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <Card
                    id={`/productDetail/${product._id}`}
                    key={product.id}
                    products={product}
                    handleAddToCart={handleAddToCart}
                    handleGoToProductDetail={handleGoToProductDetail}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={` ${x["section"]}`}>
        <div className={` ${x["section-heading"]}`}>
          <h2 className={` ${x["hTitle"]}`}>
            <a href="collections/scale-figure">Sản Phẩm Có Sẵn</a>
          </h2>
          <p>Sản phẩm đang có sẵn, bạn có thể mua ngay</p>
        </div>
      </div>

      <div className=" container wrapper">
        <div className="d-flex row flex-row-reverse justify-content-around">
          <div className="col-12 col-md-12 col-lg-4">
            <div className={`${x["groupbanner-hover"]}`}>
              <img
                className={`lazyloaded ls-is-cached ${x["images"]}`}
                src="https://theme.hstatic.net/1000160337/1000885200/14/home_collection_1_banner.jpg?v=316"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <div className="d-flex row">
              {selectedProducts.map((product) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <Card
                    id={`/productDetail/${product._id}`}
                    key={product.id}
                    products={product}
                    handleAddToCart={handleAddToCart}
                    handleGoToProductDetail={handleGoToProductDetail}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${x["title"]}`}>
        <div className={`${x["groupbanner-hover"]}`}>
          <img
            className={`lazyloaded ls-is-cached ${x["images"]}`}
            src="//theme.hstatic.net/1000160337/1000885200/14/home_bannerfull.jpg?v=316"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CardPage;
