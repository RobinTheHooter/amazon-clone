import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ProductTypeOne from "../Blueprints/ProductTypeOne";
import ProductTypeTwo from "../Blueprints/ProductTypeTwo";

function home() {
  return (
    <div className="Home">
      <Link className="product-link" to="/products">
        <div className="home-container">
          <img
            className="home-banner"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Gw/Jun-WRS/Event/Deals-model-Unrec-3000._CB634972579_.jpg"
            alt="banner"
          />
        </div>
      </Link>
      <div className="home-row">
        {/* <ProductTypeOne productHeading="" productImageOne="" productDescriptionOne="" productImageTwo="" productDescriptionTwo="" productImageThree="" productDescriptionThree="" productImageFour="" productDescriptionFour="" seeMore=""/>*/}

        {/* <ProductTypeTwo productHeading="" productImage="" productDescription="" seeMore=""/>*/}

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Shop & Pay | Earn rewards daily"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg"
            productDescriptionOne="Claim your scratch cards"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg"
            productDescriptionTwo="Redeem your collected rewards"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg"
            productDescriptionThree="Unlock more rewards when you pay or shop"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay_Rewards/Rewards0.5x._SY116_CB633810016_.jpg"
            productDescriptionFour="Explore all offers in product-link place"
            seeMore="See more"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeTwo
            productHeading="Upto 70% off | Clearance store"
            productImage="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            seeMore="See more"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Upgrade your home | Amazon Brands & more"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"
            productDescriptionOne="Smard LED TVs"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Appliances_1X_V2_3._SY116_CB636581536_.jpg"
            productDescriptionTwo="Appliances"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
            productDescriptionThree="Furniture"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg"
            productDescriptionFour="Kitchen products"
            seeMore="See more"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeTwo
            productHeading="Pay your credit card bills on Amazon"
            productImage="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
            productDescription=""
            seeMore="See more"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
      </div>

      <div className="home-row">
        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Shop by Category"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg"
            productDescriptionOne="Fresh"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
            productDescriptionTwo="Mobiles"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg"
            productDescriptionThree="Fashion"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
            productDescriptionFour="Electronics"
            seeMore="See more"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Top picks for your home"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
            productDescriptionOne="ACs"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
            productDescriptionTwo="Refrigerators"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
            productDescriptionThree="Microwaves"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            productDescriptionFour="Washing machines"
            seeMore="See more"
          />
        </Link>

        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Up to 60% off | Styles for Women"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
            productDescriptionOne="Women's Clothing"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
            productDescriptionTwo="Footwear+Handbags"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"
            productDescriptionThree="Watches"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
            productDescriptionFour="Fashion jewellery"
            seeMore="See more"
          />
        </Link>

        <Link className="product-link" to="/checkout">
          <ProductTypeTwo
            productHeading="Discover your home"
            productImage="https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/PC-CC-758X608._SY304_CB636614722_.jpg"
            productDescription=""
            seeMore="See more"
          />
        </Link>
        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
      </div>

      <div className="home-row">
        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Electronics devices for home office"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
            productDescriptionOne="Smartwatches & fitness trackers"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
            productDescriptionTwo="Tablets"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
            productDescriptionThree="Laptops"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
            productDescriptionFour="Monitors"
            seeMore="See more"
          />
        </Link>

        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Cookware & dining"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
            productDescriptionOne="Gas stoves"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg"
            productDescriptionTwo="Cookware"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg"
            productDescriptionThree="Kitchen storage"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
            productDescriptionFour="Tableware"
            seeMore="See more"
          />
        </Link>

        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Shop & Pay | Earn rewards daily"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg"
            productDescriptionOne="Claim your scratch  cards"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg"
            productDescriptionTwo="Redeem your collected rewards"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg"
            productDescriptionThree="Unlock more rewards when you pay or shop"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay_Rewards/Rewards0.5x._SY116_CB633810016_.jpg"
            productDescriptionFour="Explore all offers in product-link place"
            seeMore="See more"
          />
        </Link>

        <Link className="product-link" to="/products">
          <ProductTypeOne
            productHeading="Amazon Pay | Book your travel tickets"
            productImageOne="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Flight_1._SY116_CB636958158_.jpg"
            productDescriptionOne="Flight tickets"
            productImageTwo="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Bus_3._SY116_CB636958158_.jpg"
            productDescriptionTwo="Bus tickets"
            productImageThree="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Train_2._SY116_CB636958158_.jpg"
            productDescriptionThree="Train tickets"
            productImageFour="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Travel_accessories_4._SY116_CB636958158_.jpg"
            productDescriptionFour="Essential travel products"
            seeMore="Explore more from Amazon Pay"
          />
        </Link>
      </div>

      <div className="home-row">
        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeTwo
            productHeading="Save 10% with less effort"
            productImage="https://images-eu.ssl-images-amazon.com/images/G/31/SnS/X-site/2022winter/XCM_Manual_ORIGIN_1402790_2138292_4419909_IN_SNS_GW_Spring_379x304_1X._SY304_CB624224587_.jpg"
            productDescription=""
            seeMore="Subscribe & Save"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeTwo
            productHeading="Up to 60% off | Professional tools & more"
            productImage="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCCC/cc_379x304-01._SY304_CB625511053_.jpg"
            productDescription=""
            seeMore="See more"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeTwo
            productHeading="Discover your home"
            productImage="https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/PC-CC-758X608._SY304_CB636614722_.jpg"
            productDescription=""
            seeMore="See more"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link className="product-link" to="/products">
          <ProductTypeTwo
            productHeading="Pay your credit card bills on Amazon"
            productImage="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
            productDescription=""
            seeMore="See more"
          />
        </Link>

        {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default home;
