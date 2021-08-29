
import { FC, ReactNode } from "react";
import Ticker from "react-ticker";
import s from "./Marque.module.css";
import cn from "classnames";

interface Props {
  children: ReactNode[]
  variant?: "primary" | "secondary"
}

const Marque: FC<Props> = ({ children, variant = "primary" }) => {
  const rootClassName = cn(
    s.root,
    {
      [ s.secondary ]: variant === "secondary"
    }
  )

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() =>
          <div className={s.container}>
            {children}
          </div>
        }
      </Ticker>
    </div>
  )
}

export default Marque;
