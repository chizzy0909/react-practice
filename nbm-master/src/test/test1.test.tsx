import React from "react";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, mount, configure } from "enzyme";
import { DetailQA } from "../components/detailQA/detailQA";
import { DetailQACom } from "../components/detailQaCom/detailQaCom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import rootStore from "../redux/store";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "../App";

const mockStore = configureMockStore([thunk]);
// configure({ adapter: new Adapter() });
Enzyme.configure({ adapter: new Adapter() });

describe("First test", () => {
  interface DetailQAState {
    loading: boolean;
    error: string | null;
    data: any;
  }

  const initialState: DetailQAState = {
    loading: true,
    error: null,
    data: Object,
  };

  const store = mockStore({
    detailQA: initialState,
  });

  const wrapper = mount(
    <Provider store={store}>
      <DetailQA />
    </Provider>
  );
  it("コンポーネントが存在すること", () => {
    expect(wrapper.find("DetailQA").length).toBe(1);
  });
  it("h1が存在すること", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });
});
