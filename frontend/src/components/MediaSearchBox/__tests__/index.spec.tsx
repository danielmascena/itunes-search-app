import * as React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import MediaSearchBox from "../index";

const hasInputValue = (element: TestElement, inputValue: string) =>
  screen.getByDisplayValue(inputValue) === element;

const changeHandler = jest.fn();

describe("MediaSearchBox Component", () => {
  afterEach(cleanup);

  it("renders the MediaSearchBox component", () => {
    expect(
      renderer.create(<MediaSearchBox onSearch={changeHandler} />).toJSON()
    ).toMatchSnapshot();
  });

  it("calls 'onSearch' prop on input change", async () => {
    const querySearch = "I am with the band";
    const placeholder = "Artists, songs, or albums";
    render(
      <MediaSearchBox placeholderText={placeholder} onSearch={changeHandler} />
    );
    const input = screen.getByPlaceholderText("Artists, songs, or albums");

    fireEvent.change(input, { target: { value: querySearch } });
    expect(hasInputValue(input, querySearch)).toBe(true);
  });
});
