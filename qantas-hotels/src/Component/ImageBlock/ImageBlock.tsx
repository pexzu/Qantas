import React, { use, useEffect, useState } from "react";
import * as E from "./ImageBlockElement";

interface IImageBlockProps {
  srcUrl: string;
  promo: string;
}

export const ImageBlock = ({ srcUrl, promo }: IImageBlockProps) => {
  return (
    <E.ImageBlockContainer>
      <E.Promo>{promo}</E.Promo>
      <img src={srcUrl} />
    </E.ImageBlockContainer>
  );
};
