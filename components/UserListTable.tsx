import {User} from "../types";
import {FC} from "react";
import Image from 'next/image';
import styles from "../styles/UserListTable.module.scss";

const titlesTable: string[] = ['photo', 'name', 'status', 'registration', 'age', 'age'];

type usersTypeProps = {
    usersData: [User]
}

export const UserListTable: FC<usersTypeProps> = ({usersData}) => {
    console.log(usersData);
    return (
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
                                       width={50}
                                       height={50}
                                />
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.online}
                            </td>
                            <td>
                                {item.registration}
                            </td>
                            <td>
                                <button>
                                    {item.online}
                                </button>
                            </td>
                        </tr>

                    );
                })
            }

            </tbody>
        </table>
    );
};

