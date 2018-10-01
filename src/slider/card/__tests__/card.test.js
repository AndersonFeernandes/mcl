import "./../../../test.setup";

import React from "react";
import { shallow } from "enzyme";
import Card from "../card";

describe("Testing Card Component", () => {

    it("should render correctly", (done) => {

        const cardDetails = {
            id: 1,
            title: "We are Humans",
            subtitle: "And we love humans",
            text: "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
            image_url: "https://picsum.photos/300/150/?random",
            href: "https://mindera.com/people-and-culture/we-are-humans/",
            is_liked: true
        };

        const wrapper = shallow(
            <Card details={cardDetails} />
        );

        expect(wrapper).toMatchSnapshot();
        done();
    });

    it("should redirect on click", (done) => {

        const cardDetails = {
            id: 1,
            title: "We are Humans",
            subtitle: "And we love humans",
            text: "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
            image_url: "https://picsum.photos/300/150/?random",
            href: "https://mindera.com/people-and-culture/we-are-humans/",
            is_liked: true
        };


        const wrapper = shallow(
            <Card details={cardDetails} />
        );

        global.dom.reconfigure({
            url: cardDetails.href
        });

        wrapper.first().simulate("click");
        expect(window.location.href).toBe(cardDetails.href);
        done();
    });
});