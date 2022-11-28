import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import {FC} from "react";
import {IndexInfo} from "../types";
import {UserListTable} from "../components/UserListTable";
import {GetServerSideProps} from "next";
import {Video} from "../components/Video";

const url = 'https://tz.smart-ui.pro';

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(url);
    const data = await response.json();

    //special object next then data is null
    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: {usersData: data.users, videoData: data.video},
    };
};

type indexPageProps = {
    usersData: [IndexInfo];
    videoData: [IndexInfo];
}


const Home: FC<indexPageProps> = ({usersData, videoData}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next-js-test</title>
                <meta name="description" content="Next-js-test education"/>
                <link rel="icon" href="uniswap-uni-logo.png" type="image/x-icon"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>

            <main className={styles.main}>
                <Video videoData={videoData}/>
                <UserListTable usersData={usersData}/>
            </main>
        </div>
    );
};

export default Home;