import React, { use, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { MdCircle } from "react-icons/md";
import { IRating } from "../../types/interface";

export const Ratings = ({ ratingValue, ratingType }: IRating) => {
  return (
    <div>
      {ratingType == "star" ? (
        <Rating readonly allowFraction initialValue={ratingValue} size={20} />
      ) : (
        <Rating
          fillIcon={<MdCircle size={15} />}
          emptyIcon={<MdCircle size={15} />}
          readonly
          allowFraction
          initialValue={ratingValue}
        />
      )}
    </div>
  );
};
