import {FC, useState} from "react";
import {IndexInfo} from "../types";
import styles from "../styles/Video.module.scss";
import Link from "next/link";
import Image from "next/image";

type videoTypeProps = {
    videoData: IndexInfo
}


export const Video: FC<videoTypeProps> = ({videoData}) => {
    const {embed, text, link} = videoData || {};
    const [isPlayVideo, setIsPlayVideo] = useState<boolean>(true);

    const playVideoHandler = () => {
        setIsPlayVideo(!isPlayVideo);
    };

    return (
        <div className={styles.videoItem}>
            <div className={styles.videoInfo}>
                <h1>embed {embed}</h1>
                <p>{text}</p>
                <Link href={link}>{link}</Link>
            </div>
            {
                isPlayVideo
                ?
                    <button onClick={playVideoHandler}>
                        <Image
                            src="/placeholder.png"
                            alt="placeholder"
                            className={styles.placeholderImg}
                            loading="lazy"
                            width={480}
                            height={270}
                        />

                        <Image
                            src="/btn-youtube.png"
                            alt="placeholder"
                            className={styles.youtubeLogo}
                            loading="lazy"
                            width={70}
                            height={50}/>
                    </button>
                    :

                    <div className={styles.videoBox}>
                        <iframe
                                src={`https://www.youtube.com/embed/${embed}&mute=1`}
                                frameBorder="0"
                                allow="autoplay"
                                allowFullScreen
                                />
                    </div>

            }
        </div>

    );
};
