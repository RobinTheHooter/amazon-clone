import React from "react";
import ProductTypeThree from "../Blueprints/ProductTypeThree";
import Sidebar from "../Static-components/Sidebar";
import "./Products.css";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <div className="sidebar-side">
        <Sidebar />
      </div>
      <div className="product-side">
        <p className="results">RESULTS</p>
        <p className="results-description">
          Price and others details may vary based on product size and colour.
        </p>
        <div className="products-column">
          {/* column 1 */}
          <div className="products-column-1">
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/51SICavnBKL._AC_UL320_.jpg"
                title="India Today English Jan 03 , 2022 (Anniversary Special)"
                price={1213}
                subPrice={1444}
                save={231}
                percentageOffPrice={30}
                rating={5}
                ratingNumber={145}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/51HBom8xz7L._AC_UL320_.jpg"
                title="jboAt Airdopes 141 42H Playtime, Beast Mode ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance, Smooth Touch Controls Bluetooth Truly..."
                price={1213}
                subPrice={1444}
                save={213}
                rating={3}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/71edjA10hZL._AC_UL320_.jpg"
                title="Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)"
                price={299}
                subPrice={499}
                save={200}
                percentageOffPrice={40}
                rating={4}
                ratingNumber={3174}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/81xmjvkCTNL._SX679_.jpg"
                title="Green Soul Monster Ultimate Series T Multi-Functional Ergonomic Gaming Chair with Premium Spandex & PU Leather Fabric, Adjustable Neck & Lumbar Pillow, 4D Adjustable Armrests & Heavy Duty Metal Base (Black & Blue)"
                price={17990}
                subPrice={35500}
                save={17510}
                percentageOffPrice={49}
                rating={4}
                ratingNumber={5999}
              />
            </Link>
          </div>

          {/* column 2 */}
          <div className="products-column-1">
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://images-na.ssl-images-amazon.com/images/I/51lYgLHRjML._SY341_BO1,204,203,200_.jpg"
                title="Dragon Ball Z Complete Box Set: Vols. 1-26 with Premium Paperback"
                price={12250}
                subPrice={12250}
                save={0}
                percentageOffPrice={0}
                rating={5}
                ratingNumber={1458}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/81rOuSWZtvL._SX569_.jpg"
                title="ASUS ROG Zephyrus G14 (2021) 14-inch (35.56 cms) QHD 120Hz, AMD Ryzen 9 5900HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Gray/Anime Matrix/1.7 Kg), GA401QM-K2331TS"
                price={135290}
                subPrice={210990}
                save={75700}
                percentageOffPrice={36}
                rating={4}
                ratingNumber={60}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://images-eu.ssl-images-amazon.com/images/I/41-yA8lI8lL._SX300_SY300_QL70_FMwebp_.jpg"
                title="Xiaomi 11T Pro 5G Hyperphone(Moonlight White,12GB RAM,256GB Storage)|SD 888|120W HyperCharge|6 Months Free Screen Replacement for Prime|Additional Exchange Offer|Get 3 Months of YouTube Premium Free!"
                price={34999}
                subPrice={54999}
                save={20000}
                percentageOffPrice={27}
                rating={4}
                ratingNumber={3442}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/41FQBTCPstL._SX679_.jpg"
                title="Hush Standard Pillow | Softex Fiber Filling | Medium Soft Feel The Zero Headache Cotton Bed Pillow, (Beige, 16 x 24 x 6 Inch)"
                price={550}
                subPrice={750}
                save={200}
                percentageOffPrice={27}
                rating={3}
                ratingNumber={260}
              />
            </Link>
          </div>

          {/* column 3 */}
          <div className="products-column-1">
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/71Q54HnKxwS._SX679_.jpg"
                title="Nintendo Switch OLED model With Neon Red & Neon Blue Joy-Con"
                price={33999}
                subPrice={49999}
                save={16000}
                percentageOffPrice={32}
                rating={4}
                ratingNumber={624}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/81pI8dUxG7L._SX569_.jpg"
                title="BenQ MOBIUZ Gaming Monitor EX2710U 27 4K UHD, HDRi, IPS, 144Hz 1ms MPRT, FreeSync Premium Pro, 4K @120Hz Compatible, 98% P3 Color Coverage, Built-in 2.1ch Speakers, Eye-Care, Bezel-Less"
                price={69999}
                subPrice={89999}
                save={20000}
                percentageOffPrice={22}
                rating={5}
                ratingNumber={23}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/71Iiu7KDOEL._SX425_.jpg"
                title="Juarez Acoustic Guitar Kit, 38 Inch Cutaway, 38C with Bag, Strings, Pick and Strap, 3TS Sunburst"
                price={2229}
                subPrice={6990}
                save={4761}
                percentageOffPrice={69}
                rating={4}
                ratingNumber={5182}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://images-na.ssl-images-amazon.com/images/I/51Z+BECm6dS._SX258_BO1,204,203,200_.jpg"
                title="The Art of War (DELUXE EDITION)"
                price={199}
                subPrice={250}
                save={51}
                percentageOffPrice={30}
                rating={5}
                ratingNumber={874}
              />
            </Link>
          </div>

          {/* column 4 */}
          <div className="products-column-1">
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/51eKSTFPGKL._SX425_.jpg"
                title="Trunkin Attack on Titan Levi Ackerman Action Figure 35 Cms Shingeki No Kyojin Anime Figurine Weeb Manga Collectible 35CMg"
                price={12000}
                subPrice={24000}
                save={12000}
                percentageOffPrice={50}
                rating={5}
                ratingNumber={18}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://images-eu.ssl-images-amazon.com/images/I/51XIRiNFXzL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                title="Monster Musume Vol. 14 (Monster Musume, 14)"
                price={420}
                subPrice={840}
                save={420}
                percentageOffPrice={50}
                rating={5}
                ratingNumber={324}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://images-eu.ssl-images-amazon.com/images/I/41oWDOwlt7L._SX300_SY300_QL70_FMwebp_.jpg"
                title="Zebronics DRIP Smart Watch with Bluetooth Calling, 4.3cm (1.69),10 Built-in & 100+ Watch Faces, 100+ Sport Modes, 4 Built-in Games, Voice Assistant, 8 Menu UI, Fitness Health & Sleep Tracker (Blue)"
                price={1899}
                subPrice={6499}
                save={4600}
                percentageOffPrice={71}
                rating={4}
                ratingNumber={417}
              />
            </Link>
            <Link to="/productcheckout" className="product-link">
              <ProductTypeThree
                image="https://m.media-amazon.com/images/I/81szAXdCKHL._SX679_.jpg"
                title="Demon's Souls | PS5 Game (PlayStation 5)"
                price={2739}
                subPrice={4999}
                save={2260}
                percentageOffPrice={45}
                rating={5}
                ratingNumber={158}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
