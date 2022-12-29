import React from 'react'
import { useState } from 'react'

export default function AboutPageComponent() {
    const [about, setAbout] = useState(" nabajyoti ");
    const fixAbout = () => {
        if (about === " nabajyoti ")
            setAbout(" modak ");
        else
            setAbout(" nabajyoti ");
    }
    return (
        <div>
            <div onClick={fixAbout}>About{ about }PageComponent</div>
        </div>
    )
}