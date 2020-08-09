import styles from "./Paginator.module.scss";
import PaginationButton from "./PaginationButton/PaginationButton";
import React, {FC, useState} from "react";
import Button from "../Button/Button";
import prev from '../../../assets/images/prev-arrow.svg'
import next from '../../../assets/images/next-arrow.svg'

type PropsType = {
    totalItemsCount: number
    pageSizes: number
    currentPage: number
    portionSize?: number

    onPageChanged: (pageNumber: number) => void
}

export const Paginator: FC<PropsType> = ({totalItemsCount, pageSizes,
                                      currentPage, onPageChanged, portionSize = 5}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSizes);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let [portionNumber, setPortionNumber] = useState(1);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={styles['paginator']}>
            {portionNumber > 1 && <Button
                type={'button'}
                value={''}
                sizeClass={'small'}
                typeClass={'aqua'}
                className={styles.button}
                imgSrc={prev}
                imgClassName={''}
                onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}
            />}

            {pages.filter(page => {
                return page >= leftPortionPageNumber && page <= rightPortionPageNumber
            })
                .map(page => {
                    return <PaginationButton onClick={() => {
                        onPageChanged(page)
                    }}
                                             key={page}
                                             value={page}
                                             current={currentPage}
                                             page={page}

                    />
                })}
            {portionCount > portionNumber && <Button
                type={'button'}
                value={''}
                sizeClass={'small'}
                typeClass={'aqua'}
                className={styles.button}
                imgSrc={next}
                imgClassName={'null'}
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}
            />}
        </div>
    )
}
