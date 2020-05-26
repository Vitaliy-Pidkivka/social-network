import styles from "./Paginator.module.scss";
import PaginationButton from "./PaginationButton/PaginationButton";
import React from "react";

const Paginator = ({totalUsersCount,pageSizes ,currentPage, onPageChanged}) =>{
    let pagesCount = Math.ceil(totalUsersCount / pageSizes);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles['paginator']}>
            {pages.map(page => {
                return <PaginationButton onClick={() => {
                    onPageChanged(page)
                }}                       key={page}
                                         value={page}
                                         current={currentPage}
                                         page={page}
                />
            })}
        </div>
    )
}
export  default Paginator

