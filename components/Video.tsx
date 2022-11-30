import {FC, useState} from "react";
import {VideoData} from "../types";
import styles from "../styles/Video.module.scss";
import Link from "next/link";
import Image from "next/image";

type videoTypeProps = {
    videoData: VideoData
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
                    <button className={styles.btnWrap} onClick={playVideoHandler}>
                        <Image
                            src="/placeholder.png"
                            alt="placeholder"
                            className={styles.placeholderImg}
                            loading="lazy"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className={styles.youtubeLogo}>
                            <Image
                                src="/btn-youtube.png"
                                alt="placeholder"
                                loading="lazy"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </button>
                    :
                    <div className={styles.videoBox}>
                        <iframe
                            src={`https://www.youtube.com/embed/${embed}`}
                            frameBorder="0"
                            allow="autoplay"
                            allowFullScreen
                        />
                    </div>
            }
        </div>
    );
};
