"use client"
import ThreeScene from "./ThreeScene";
import Computer from "./Computer";

const ThreeWrapper: React.FC = () => {
    return <>
        <ThreeScene />
        <Computer />
        <ThreeScene />
    </>
}

export default ThreeWrapper;