import React, { useState } from "react";

function loadComponent(importFunc) {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Component: null,
            }
        }
        componentDidMount() {
            console.log("inside didMount");
            importFunc().then((mod) => {
                this.setState({
                    Component: mod.default,
                })
            })
        }
        render() {
            console.log("inside render");
            return this.state.Component ? (
                <this.state.Component {...this.props} />
            ) : null;
        }
    };
}
