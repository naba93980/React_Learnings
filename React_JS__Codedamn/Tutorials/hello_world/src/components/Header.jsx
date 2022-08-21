import React from "react";

function Header()
{
    const amIAbove18 = !true;
    return (
        <header>
            <h1>this is header <br /> { amIAbove18? <p>i am big</p>: <p>i am small</p> }</h1>
        </header>
    )
}
export default Header;