import React from "react";

export default function WhyUs() {
  return (
    <>
      <div className="s3 whyus">
        <div className="s3-container">
          <div className="s3-image-wrapper">
            <div className="">
              <img
                src="assets/img/wu.png"
                className="s3-box-image"
                style={{
                  width: "75%",
                  margin:'auto'
                }}
              />
              {/* <img
                src="images/Graphic-Decentralized-Base.png"
                loading="lazy"
                data-w-id="2a136f4b-ce37-a8da-4149-6d5b14ea3029"
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                srcSet="
            images/Graphic-Decentralized-Base-p-500.png   500w,
            images/Graphic-Decentralized-Base-p-800.png   800w,
            images/Graphic-Decentralized-Base-p-1080.png 1080w,
            images/Graphic-Decentralized-Base.png        1124w
          "
                alt=""
                className="s3-base-image"
              />
              <img
                src="images/Graphic-Decentralized-Orbitals.png"
                loading="lazy"
                data-w-id="dd382521-3a47-1d9a-0f32-82e357f71315"
                sizes="(max-width: 479px) 90vw, (max-width: 991px) 72vw, (max-width: 1279px) 41vw, (max-width: 1439px) 42vw, 598px"
                srcSet="
            images/Graphic-Decentralized-Orbitals-p-500.png   500w,
            images/Graphic-Decentralized-Orbitals-p-800.png   800w,
            images/Graphic-Decentralized-Orbitals-p-1080.png 1080w,
            images/Graphic-Decentralized-Orbitals.png        1121w
          "
                alt=""
                className="s3-orbitals-image"
              /> */}
            </div>
          </div>
          <div
            data-w-id="dd382521-3a47-1d9a-0f32-82e357f71309"
            className="s3-info-container"
          >
            <h2 className="h2 is-small-h2">Why Invest with Us?</h2>
            <p className="p is-s3-p">
              We are bridging the gap between conventional asset and Decentralized Finance.
              We are experts of both the Real Estate and Blockchain industry.
            </p>
            <div className="s3-list-container">
              <div className="s3-list-item">
                <img
                  src="images/Icon-Reviews.svg"
                  loading="lazy"
                  alt=""
                  className="s3-icon"
                />
                <div className="s3-item-description">
                  Diversify your portfolio and invest as high/low as you want.
                </div>
              </div>
              <div className="s3-list-item">
                <img
                  src="images/Icon-Secure.svg"
                  loading="lazy"
                  alt=""
                  className="s3-icon"
                />
                <div className="s3-item-description">
                  Hassle-free investing with high liquidity.
                </div>
              </div>
              <div className="s3-list-item">
                <img
                  src="images/Icon-Decentralized.svg"
                  loading="lazy"
                  alt=""
                  className="s3-icon"
                />
                <div className="s3-item-description">
                  We handpick every property, with high IRR, after complete due
                  diligence.
                </div>
              </div>
              <div className="s3-list-item">
                <img
                  src="images/Icon-Experience.svg"
                  loading="lazy"
                  alt=""
                  className="s3-icon"
                />
                <div className="s3-item-description">
                  Bridge up the gap between conventional Real Estate and Open
                  Finance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
