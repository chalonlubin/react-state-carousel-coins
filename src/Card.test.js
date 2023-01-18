import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


const IMAGE_OBJECT = TEST_IMAGES[0];
const TEST_NUM = 1;

const ImgCard = <Card
  caption={IMAGE_OBJECT.caption}
  src={IMAGE_OBJECT.src}
  currNum={TEST_NUM}
  totalNum={TEST_IMAGES.length}
/>;

it("renders without crashing", function () {
  render(ImgCard);
});

it("matches snapshot", function () {
  const { container } = render(ImgCard);
  expect(container).toMatchSnapshot();
});

it("works: Card properties render correctly.", function () {
  const { container, debug } = render(ImgCard);
  const image = container.querySelector('img');
  expect(
    container.querySelector('h4.Card-title')
  ).toContainHTML('testing image 1');
  expect(image).toBeInTheDocument();
  expect(image.getAttribute('src')).toContain('test1.com');
  expect(image.getAttribute('alt')).toContain('testing image 1');
});
