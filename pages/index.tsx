import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import {FC} from "react";
import {User} from "../types";
import {UserListTable} from "../components/UserListTable";
import {GetServerSideProps} from "next";

const url = 'https://tz.smart-ui.pro';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch(url);
    const data = await response.json();

    //special object next then data is null
    if (!data) {
        return {
            notFound: true
        };
    }

    return {
        props: {usersData: data.users}
    };
};

type usersTypeProps = {
    usersData: [User]
}


const Home: FC<usersTypeProps> = ({usersData}) => {
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
                <UserListTable usersData={usersData}/>
            </main>

        </div>
    );
};

export default Home;