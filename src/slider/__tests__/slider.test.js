import "./../../test.setup";

import React from "react";
import { mount } from "enzyme";
import Slider from "../slider";


describe("Testing Slider Component", () => {

     beforeEach(() => {
         sinon.restore();
     });

    it("should render 3 cards on slider", (done) => {

                const mockData =
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
            ];

        const promise = Promise.resolve(new Response(JSON.stringify(mockData)));
        const stub = sinon.stub(global, "fetch").callsFake(() => promise);
        const showCards = 3;
        const wrapper = mount(
                    <Slider maxShow={showCards} tabIndex={1} />
                );

        setImmediate(() => {
                    expect(wrapper.state()).toHaveProperty("cards", mockData);
                    expect(wrapper.state().cards).toHaveLength(showCards);
                    done();
                });
    });

    it("should render 1 cards on slider", (done) => {

        const mockData =
            [
                {
                    "id": 1,
                    "title": "We are Humans",
                    "subtitle": "And we love humans",
                    "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
                    "image_url": "https://picsum.photos/300/150/?random",
                    "href": "https://mindera.com/people-and-culture/we-are-humans/",
                    "is_liked": true
                }
            ];



        const promise = Promise.resolve(new Response(JSON.stringify(mockData)));
        const stub = sinon.stub(global, "fetch").callsFake(() => promise);

        const showCards = 1;

        const wrapper = mount(
            <Slider maxShow={showCards} tabIndex={1} />
        );


        setImmediate(() => {
            expect(wrapper.state()).toHaveProperty("cards", mockData);
            expect(wrapper.state().cards).toHaveLength(showCards);
            done();
        });

    });
});