import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return <h1>home. Go to <Link to="/About">about</Link></h1>
}