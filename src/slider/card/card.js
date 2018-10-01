// Core
import React from "react";

// Assets
import bagde from "./assets/img/badge.png";

// Components
import LikeButton from "./like-button/like-button";

// Styles
import {
    Badge,
    CardContent,
    Header,
    HeaderImage,
    SubTitle,
    Text,
    Title
} from "./card-styles";

class Card extends React.Component {


    // Setters
    handleOnClick(link) {
        let { location } = window;
        location.href = link;
    }

    // Accessibility
    handleAccessibility(e, link) {
        if (e.key === "Enter" || e.key === " ") {
            this.handleOnClick(link);
        }
    }


    // Render
    render() {

        const {
            id,
            title,
            subtitle,
            text,
            image_url,
            href,
            is_liked
        } = this.props.details;
        const { tabIndex } = this.props;

        return (
            <CardContent
                tabIndex={tabIndex}
                onKeyDown={(e) => this.handleAccessibility(e, href)}
                onClick={() => this.handleOnClick(href)}>
                <Header>
                    <HeaderImage alt={"Image: " + title} src={image_url} />
                    <Badge src={bagde} />
                    <Title tabIndex={tabIndex}> {title} </Title>
                    <SubTitle tabIndex={tabIndex}> {subtitle} </SubTitle>
                </Header>

                <Text tabIndex={tabIndex} dangerouslySetInnerHTML={{ __html: text }} />

                <footer>
                    <LikeButton tabIndex={tabIndex} id={id} isLiked={is_liked} />
                </footer>
            </CardContent >
        );
    }
}

export default Card;