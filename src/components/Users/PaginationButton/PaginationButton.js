import React from "react";
import styles from './PaginationButton.module.scss'

const PaginationButton = (props) => {
    return (
        <span className={`${styles.button} ${props.current === props.page  && styles.current}`}
              onClick={props.onClick}
        >
           {props.value}
        </span>
    )


}
export default PaginationButton