// Core
import React from "react";

// Dependencies
import MediaQuery from "react-responsive";

class Desktop extends React.Component {

    // Render
    render() {
        const { children } = this.props;

        return (
            <MediaQuery query="(min-width: 900px)">
                {children}
            </MediaQuery>
        );
    }
}

export default Desktop;