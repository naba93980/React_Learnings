import React, { useState } from "react";

export default function IfElseCondRend() {
    const [name, updateName] = useState("");
    let template = (
        <div>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    );
    function handleChange(e) {
        console.log(e.target.value);
        updateName(e.target.value);
    }
    if (name === "admin") {
        console.log("admin");
        template = (
            <div>
                <p>{name}</p>
                <input type="text" value={name} onChange={handleChange} />
            </div>
        );
    } else {
        console.log("not admin");
        template = (
            <div>
                <input type="text" value={name} onChange={handleChange} />
            </div>
        );
    }
    return template;
}
