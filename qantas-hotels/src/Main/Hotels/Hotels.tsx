import React, { use, useEffect, useState } from "react";
import Logo from "../../Images/Pictures/qantas-logo.png";
import { IHotels } from "../../types/interface";
import { ImageBlock } from "../../Component/ImageBlock/ImageBlock";
import { Ratings as Rating } from "../../Component/Rating/Rating";
import * as E from "./HotelsElement";

export const Hotels = () => {
  const data: IHotels = require("../../Data/hotels.json");
  const hotels = data.results;
  const numOfHotels = hotels?.length;
  return (
    <div>
      {/* Nav */}
      <E.LogoBlock src={Logo} />
      {/* count and sort */}
      <E.TabHead>
        <div>{numOfHotels} hotels in Sydney</div>
        <div>Sort by </div>
      </E.TabHead>
      {/* Table */}
      <div>
        {hotels.map((item) => (
          <E.HotelsContainer>
            <ImageBlock
              srcUrl={item.property.previewImage.url}
              promo={item.offer.promotion.title}
            />
            <E.HotelsContentSection>
              <div>
                <E.HotelsContentRatingSection>
                  {item.property.title} <Rating />
                </E.HotelsContentRatingSection>
                <div>{item.property.address.join(", ")}</div>
              </div>
              <a href="">{item.offer.name}</a>
              {item.offer.cancellationOption.cancellationType ==
              "FREE_CANCELLATION" ? (
                <div>Free cancellation</div>
              ) : (
                <div></div>
              )}
            </E.HotelsContentSection>
            <div>
              <div>1 night total (AUD)</div>
              <div>
                <span>$</span> {item.offer.displayPrice.amount}
              </div>
            </div>
          </E.HotelsContainer>
        ))}
      </div>
    </div>
  );
};

//hardcoding all hotels from Sydney - could do a check if the data was dynamic
