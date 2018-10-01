import "./../../../test.setup";

import React from "react";
import { shallow } from "enzyme";
import Mobile from "../Mobile";

describe("Testing Desktop Component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(
            <Mobile></Mobile>
        );

        expect(wrapper).toMatchSnapshot();
    });
});