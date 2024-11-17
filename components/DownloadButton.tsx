"use client";

import { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { MdDownload, MdDownloadDone } from "react-icons/md";

export default function DownloadButton() {
    const [downloaded, setDownloaded] = useState(false);

    const downloadCV = () => {
        const CV_LINK = 'https://drive.google.com/uc?export=download&id=1Cefg_Wb8NqSvycfYbtpRGlN7_tUm0afo';
        window.location.href = CV_LINK;
        setDownloaded(true);
    }


    return (
        <MagicButton
            handleClick={downloadCV}
            title="Download my CV"
            icon={downloaded ? <MdDownloadDone className="w-5 h-5"/> : <MdDownload className='w-5 h-5' /> }
            position='right'
        />
    )
}
