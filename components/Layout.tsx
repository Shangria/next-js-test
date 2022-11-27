import {Header} from "./Header";
import {Footer} from "./Footer";
import {FC, ReactNode} from "react";


type layoutProps = {
    children: ReactNode
}

export const Layout: FC<layoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

