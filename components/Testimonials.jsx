import React, { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const testimony = testimonials[currentIndex];

  return (
    <div>
      <div>
        {testimonials.length && (
          <>
            <div>
              <img src={urlFor(testimony.imgUrl)} alt={testimony.name} />
              <div>
                <p>{testimony.feedback}</p>
                <div>
                  <h4>{testimony.name}</h4>
                  <h5>{testimony.company}</h5>
                </div>
              </div>
            </div>

            <div>
              <div
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonials.length - 1
                      : currentIndex - 1,
                  )
                }
                className=""
              >
                <HiChevronLeft />
              </div>
              <div
                onClick={() =>
                  handleClick(
                    currentIndex === testimonials.length - 1
                      ? 0
                      : currentIndex + 1,
                  )
                }
                className=""
              >
                <HiChevronRight />
              </div>
            </div>
          </>
        )}

        <div>
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              key={brand._id}
            >
              <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
