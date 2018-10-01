import "./../../../test.setup";

import React from "react";
import { shallow } from "enzyme";
import Desktop from "../Desktop";

describe("Testing Desktop Component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(
            <Desktop></Desktop>
        );

        expect(wrapper).toMatchSnapshot();
    });
});