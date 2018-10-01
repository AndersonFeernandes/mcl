import "./../../test.setup";

import React from "react";
import { mount } from "enzyme";
import Slider from "../slider";
import Card from "../card/card";
describe("Testing App Component", () => {


    beforeEach(() => {
        fetch.resetMocks();
    });


    it("should render 3 cards on slider", async() => {
        const mockData = JSON.stringify(
            [
                {
                    "id": 1,
                    "title": "We are Humans",
                    "subtitle": "And we love humans",
                    "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
                    "image_url": "https://picsum.photos/300/150/?random",
                    "href": "https://mindera.com/people-and-culture/we-are-humans/",
                    "is_liked": true
                },
                {
                    "id": 2,
                    "title": "We work together",
                    "subtitle": "Would you like to join us?",
                    "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
                    "image_url": "https://picsum.photos/300/150/?random",
                    "href": "https://mindera.com/people-and-culture/we-work-together/",
                    "is_liked": true
                },
                {
                    "id": 3,
                    "title": "We change",
                    "subtitle": "And we embrace change",
                    "text": "Nothing is sacred, from our habits to our rituals, to our enviroment. Change is a natural part of the human life, and we prefer to embrace it.",
                    "image_url": "https://picsum.photos/300/150/?random",
                    "href": "https://mindera.com/people-and-culture/we-change/",
                    "is_liked": true
                }
            ]
        );


        const promise = Promise.resolve(new Response(mockData));
        const stub = sinon.stub(global, "fetch").callsFake(() => promise);

        const wrapper = mount(
            <Slider show={3} tabIndex={1} />
        );



        expect(wrapper).toMatchSnapshot();
        wrapper.instance().componentDidMount();

        console.log(wrapper.children().find(Card).debug());

        // return promise.then(() => {
        //     // expect(wrapper.state()).toHaveProperty("dataReady", true);

        //     wrapper.update();
        // }).then(() => {

        //     // expect(wrapper.text()).toContain("data is ready");
        // });


    });



    //  expect(wrapper.state()).toHaveProperty("dataReady", true);


    // expect(wrapper).toMatchSnapshot();
    // expect(wrapper.children().find("Page")).toBeDefined();
    // console.log(wrapper.children().find("Page").children().debug());
    // expect(wrapper.children().find("Page").children()).toHaveLength(3);

});