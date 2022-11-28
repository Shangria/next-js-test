import {User} from "../types";
import {FC} from "react";
import Image from 'next/image';
import styles from "../styles/UserListTable.module.scss";

const titlesTable: string[] = ['photo', 'name', 'status', 'registration', 'age', 'action'];

type usersTypeProps = {
    usersData: [User]
}

export const UserListTable: FC<usersTypeProps> = ({usersData}) => {
    console.log(usersData);
    return (
        <div className={styles.users}>
            <h2>our users</h2>
            <table className={styles.usersTable}>
                <thead>
                <tr>
                    {
                        titlesTable.map((item, index) => {
                            return (
                                <th key={index}>{item}</th>
                            );
                        })
                    }
                </tr>
                </thead>
                <tbody>

                {
                    usersData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <Image src={item.photo} alt={item.name}
                                           width={60}
                                           height={60}
                                    />
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                {
                                    item.online ?
                                        <td>online</td>
                                        :
                                        <td>offline</td>
                                }

                                <td>
                                    {item.registration}
                                </td>
                                <td>
                                    {item.age} year
                                </td>
                                <td>
                                    {
                                        item.online ?
                                            <>
                                                <div className={styles.chatLogo}></div>
                                                <button disabled={false}>
                                                    Chat
                                                </button>
                                            </>

                                            :
                                            <>
                                                <div className={styles.chatLogo}></div>
                                                <button disabled={true}>
                                                    Chat
                                                </button>
                                            </>
                                    }

                                </td>
                            </tr>

                        );
                    })
                }
                </tbody>
            </table>
        </div>

    );
};

