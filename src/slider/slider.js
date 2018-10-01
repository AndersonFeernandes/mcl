// Core
import React from "react";

// API Services Config
import { API_CARD_URL } from "../utils/endpoints/card";

// Components
import Card from "./card/card";

// Styles
import {
    Arrows,
    LeftArrow,
    Page,
    PageController,
    RightArrow,
    SliderContent
} from "./slider-styles";

class Slider extends React.Component {

    // Life Cycle
    constructor(props, ctx) {
        super(props, ctx);
        const { show } = this.props;

        this.state = {
            cards: [],
            show: show || 3,
            page: 0

        };

        this.changePage = this.changePage.bind(this);
    }

    async componentDidMount() {
        const { page } = this.state;

        const cards = await this.getCards(page);

        this.setState({
            cards: cards
        });
    }

    // Getters
    async getPreviousCards() {
        let { page } = this.state;
        const initalPage = 0;
        let cards;

        page--;
        if (page < initalPage)
            page = initalPage;

        cards = await this.getCards(page);
        return { cards: cards, page: page };
    }

    async getNextCards() {
        let { page, lastPage, cards } = this.state;

        if (!lastPage || page < lastPage) {
            page++;
            cards = await this.getCards(page);

            if (cards.length === 0) {
                page--;
                lastPage = page;
                cards = await this.getCards(page);
            }
        }

        return { cards, page, lastPage };
    }

    // Setters
    async changePage(next) {
        let cards;

        if (next) {
            cards = await this.getNextCards();
        } else {
            cards = await this.getPreviousCards();
        }

        this.setState({ ...this.state, ...cards });
    }

    // API Service
    async getCards(page) {
        const { show } = this.state;
        const headers = new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json"
        });

        const start = page * show;
        const end = start + show;

        const response = await
            fetch(`${API_CARD_URL}?_start=${start}&_end=${end}`, {
                method: "GET",
                headers: headers
            });

        const cards = await response.json();

        return cards;
    }

    // Accessibility
    handleAccessibility(e, next = true) {
        if (e.key === "Enter" || e.key === " ") {
            this.changePage(next);
        }
    }

    // Render
    render() {
        const { cards } = this.state;
        const { tabIndex } = this.props;
        const cardWidth = 388;

        return (
            <SliderContent>
                <Page style={{ maxWidth: `${cards.length * cardWidth}px` }}>
                    {cards.map((card, key) =>
                        <Card tabIndex={tabIndex} details={card} key={key} />
                    )}
                </Page>
                <PageController>
                    <Arrows>
                        <LeftArrow
                            tabIndex={tabIndex + 1}
                            onKeyDown={(e) => this.handleAccessibility(e, false)}
                            onClick={() => this.changePage(false)} />
                        <RightArrow
                            tabIndex={tabIndex + 1}
                            onKeyDown={(e) => this.handleAccessibility(e, true)}
                            onClick={() => this.changePage(true)} />
                    </Arrows>
                </PageController>
            </SliderContent>
        );


    }
}

export default Slider;