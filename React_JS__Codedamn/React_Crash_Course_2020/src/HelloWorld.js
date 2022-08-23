import React from "react";

function InnerCompo() {
    return (
        <h1>Hello World</h1>
    );
}

function HelloWorld() {
    return <InnerCompo />;
}
export default HelloWorld; 