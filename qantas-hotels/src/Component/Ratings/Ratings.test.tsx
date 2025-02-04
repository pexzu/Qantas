import { render, screen } from "@testing-library/react";
import { Ratings } from "./Ratings";

describe("Rating", () => {
  it("renders Ratings component with self rating", () => {
    render(<Ratings ratingType="self" ratingValue={3} />);
  });
});

describe("Rating", () => {
  it("renders Ratings component with 0 rating", () => {
    render(<Ratings ratingType="star" ratingValue={0} />);
  });
});

describe("Rating", () => {
  it("renders Ratings component with star rating", () => {
    render(<Ratings ratingType="star" ratingValue={2} />);
  });
});

describe("Rating", () => {
  it("renders Ratings component with out of bound rating", () => {
    render(<Ratings ratingType="star" ratingValue={8} />);
  });
});
