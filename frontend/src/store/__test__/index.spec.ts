import {MOCK_RESOURCE_MEDIA} from "./mock";

describe("State Management", () => {
    
    it.todo("add search term");
    
    it.todo("inspect the collection media size");

    it.todo("clear up the current search");

});

export function simulateHttpRequest(action: SearchAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}