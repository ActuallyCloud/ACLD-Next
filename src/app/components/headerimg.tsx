'use client';
import { useState } from "react";
import Image from "next/image";

export default function HeaderImg(props: { imgURL: string, imgStyling: string, imgAnimationClass: string, imgDimensionW: number, imgDimensionH: number }) {
    const [styling, setStyling] = useState(props.imgStyling + " " + "invisible");

    function changeStyling() {
        let styles = styling.split(" ");
        styles.pop();

        setStyling(styles.join(" ") + " visible " + props.imgAnimationClass);
        console.log("Changed styling for image " + props.imgURL + " to " + styling);
    }

    return (
        <>
            <Image onLoad={() => changeStyling()} src={props.imgURL} className={styling} width={props.imgDimensionW} height={props.imgDimensionH} alt="image"/>
        </>
    );
}