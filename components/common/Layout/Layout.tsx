import { FC } from "react";
import s from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={s.root}>
      {children}
    </div>
  )
}

export default Layout;