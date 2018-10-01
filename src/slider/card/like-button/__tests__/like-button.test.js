import "./../../../../test.setup";

import React from "react";
import { shallow, mount } from "enzyme";
import LikeButton from "../like-button";

describe("Testing LikeButton Component", () => {

    it("should render correctly when is liked", (done) => {
        const id = 1, isLiked = true;
        const wrapper = shallow(
            <LikeButton id={id} isLiked={isLiked} />
        );

        expect(wrapper).toMatchSnapshot();
        done();
    });

    it("should render correctly when is unliked", (done) => {
        const id = 1, isLiked = false;
        const wrapper = shallow(
            <LikeButton id={id} isLiked={isLiked} />
        );

        expect(wrapper).toMatchSnapshot();
        done();
    });

    describe("Testing click function", () => {

        beforeEach(() => {
            sinon.restore();
        });

        it("if click on like button when its liked, it should unlike", (done) => {
            const id = 1, isLiked = true;
            const mockData = { is_liked: !isLiked };
            const promise = Promise.resolve(new Response(JSON.stringify(mockData)));
            const stub = sinon.stub(global, "fetch").callsFake(() => promise);

            const wrapper = mount(
                <LikeButton id={id} isLiked={isLiked} />
            );

            wrapper.first().simulate("click");
            setImmediate(() => {
                expect(wrapper.state()).toHaveProperty("isLiked", !isLiked);
                done();
            });

        });

        it("if click on like button when its unliked, it should like", (done) => {
            const id = 1, isLiked = false;
            const mockData = { is_liked: !isLiked };
            const promise = Promise.resolve(new Response(JSON.stringify(mockData)));
            const stub = sinon.stub(global, "fetch").callsFake(() => promise);

            const wrapper = mount(
                <LikeButton id={id} isLiked={isLiked} />
            );

            wrapper.first().simulate("click");
            setImmediate(() => {
                expect(wrapper.state()).toHaveProperty("isLiked", !isLiked);
                done();
            });

        });
    });


});