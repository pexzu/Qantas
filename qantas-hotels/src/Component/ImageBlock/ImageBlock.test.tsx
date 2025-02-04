import { render, screen } from "@testing-library/react";
import { ImageBlock } from "./ImageBlock";

describe("ImageBlock", () => {
  it("renders ImageBlock component", () => {
    render(
      <ImageBlock
        srcUrl="https://unsplash.it/145/124/?random"
        promo="testing"
      />
    );
  });
});

describe("ImageBlock", () => {
  it("renders ImageBlock without promo", () => {
    render(
      <ImageBlock srcUrl="https://unsplash.it/145/124/?random" promo="" />
    );
  });
});
