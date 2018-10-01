// Core
import React from "react";

// API Services Config
import { API_CARD_URL } from "../../../utils/endpoints/card";

// Styles
import { Heart } from "./like-button-styles";

class LikeButton extends React.Component {

    // Life Cycle
    constructor(props, ctx) {
        super(props, ctx);
        const { isLiked } = this.props;
        this.state = {
            isLiked: isLiked
        };

        this.toogleLike = this.toogleLike.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isLiked !== this.props.isLiked) {
            this.setState({
                isLiked: this.props.isLiked
            });
        }
    }

    // Getters
    getClass() {
        const { isLiked } = this.state;

        return (isLiked) ? "like" : "unlike";
    }

    // Setters
    async toogleLike(e) {
        e.stopPropagation();
        const isLiked = await this.setLikeStatus();

        this.setState({
            isLiked: isLiked
        });
    }


    // Accessibility
    handleAccessibility(e) {
        e.stopPropagation();
    }


    // API Services
    async setLikeStatus() {
        const { isLiked } = this.state;
        const { id } = this.props;

        const headers = new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json"
        });
        const body = {
            "is_liked": !isLiked
        };

        const response = await fetch(`${API_CARD_URL}/${id}`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(body)
        });

        const card = await response.json();

        return card.is_liked;
    }

    // Render
    render() {
        const { tabIndex } = this.props;
        return (
            <Heart
                tabIndex={tabIndex}
                className={this.getClass()}
                onKeyDown={(e) => this.handleAccessibility(e)}
                onClick={(e) => this.toogleLike(e)}
            />
        );
    }
}

export default LikeButton;