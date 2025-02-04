import React, { use, useEffect, useState } from "react";
import Logo from "../../Images/Pictures/qantas-logo.png";
import { IHotels } from "../../types/interface";
import { ImageBlock } from "../../Component/ImageBlock/ImageBlock";
import { Ratings } from "../../Component/Ratings/Ratings";
import * as E from "./HotelsElement";
import { HiSwitchVertical } from "react-icons/hi";

export const Hotels = () => {
  const [sortDesc, setSortDesc] = useState<boolean>(false);

  const data: IHotels = require("../../Data/hotels.json");
  const hotels = data.results;

  const sortHotels = () => {
    sortDesc
      ? hotels.sort(
          (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
        )
      : hotels.sort(
          (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
        );
  };
  sortHotels();

  const numOfHotels = hotels?.length;
  return (
    <div>
      {/* Nav */}
      <E.LogoBlock id="logo" alt="logo" src={Logo} />
      {/* count and sort */}
      <E.TabHead>
        <div>
          <b>{numOfHotels} </b>
          <i>hotels in </i> <b>Sydney</b>
        </div>
        <E.SortBlock>
          <div>Sort By</div>
          <E.SortContainer>
            {sortDesc ? (
              <span> Price high-low</span>
            ) : (
              <span>Price low-high</span>
            )}
            <E.SortButton
              name="sortButton"
              onClick={() => setSortDesc(!sortDesc)}
            >
              <HiSwitchVertical size={15} />
            </E.SortButton>
          </E.SortContainer>
        </E.SortBlock>
      </E.TabHead>
      <E.Hr />
      {/* Table */}
      <div>
        {hotels.map((item) => (
          <div key={item.id}>
            <E.HotelsContainer>
              <ImageBlock
                srcUrl={item.property.previewImage.url}
                promo={item.offer.promotion.title}
              />
              <E.HotelsContentSection>
                <div>
                  <E.HotelsContentRatingSection>
                    <E.HotelName> {item.property.title}</E.HotelName>
                    <Ratings
                      ratingType={item.property.rating.ratingType}
                      ratingValue={item.property.rating.ratingValue}
                    />
                  </E.HotelsContentRatingSection>
                  <E.AddressBlock>
                    {item.property.address.join(", ")}
                  </E.AddressBlock>
                </div>
                <E.Link href="">{item.offer.name}</E.Link>
                {item.offer.cancellationOption.cancellationType ==
                "FREE_CANCELLATION" ? (
                  <E.CancellationBlock>Free cancellation</E.CancellationBlock>
                ) : (
                  <div></div>
                )}
              </E.HotelsContentSection>

              <div>
                <E.PricePer>1 night total (AUD)</E.PricePer>
                <E.AmountContainer>
                  <span>$</span>{" "}
                  <E.Amount>{item.offer.displayPrice.amount}</E.Amount>
                </E.AmountContainer>
                {item.offer.savings?.amount && (
                  <E.SavingSection>
                    <div>Save {item.offer.savings?.amount}</div>
                    <div>~</div>
                  </E.SavingSection>
                )}
              </div>
            </E.HotelsContainer>
            <E.Hr />
          </div>
        ))}
      </div>
    </div>
  );
};

//hardcoding all hotels from Sydney - could do a check if the data was dynamic
