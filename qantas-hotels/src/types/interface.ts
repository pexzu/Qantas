export interface IHotels {
  results: IResult[];
}

export interface IResult {
  id: string;
  property: IProperty;
  offer: IOffer;
}

export interface IProperty {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: IPreviewImage;
  rating: IRating;
}

export interface IPreviewImage {
  url: string;
  caption: string;
  imageType: string;
}

export interface IRating {
  ratingValue: number;
  ratingType: "star" | "self";
}

export interface IOffer {
  promotion: IPromotion;
  name: string;
  displayPrice: IDisplayPrice;
  savings?: ISavings;
  cancellationOption: ICancellationOption;
}

export interface IPromotion {
  title: string;
  type: string;
}

export interface IDisplayPrice {
  amount: number;
  currency: string;
}

export interface ISavings {
  amount: number;
  currency: string;
}

export interface ICancellationOption {
  cancellationType: string;
}
