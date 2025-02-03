import React, { use, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { MdCircle } from "react-icons/md";

export const Ratings = () => {
  return (
    <div>
      <Rating readonly allowFraction initialValue={3.5} />
      <Rating
        fillIcon={<MdCircle size={50} />}
        emptyIcon={<MdCircle size={50} />}
        readonly
        allowFraction
        initialValue={2.5}
      />
    </div>
  );
};
