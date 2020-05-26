import styles from "./Paginator.module.scss";
import PaginationButton from "./PaginationButton/PaginationButton";
import React, {useState} from "react";
import Button from "../Button/Button";
import prev from '../../../assets/images/prev-arrow.svg'
import next from '../../../assets/images/next-arrow.svg'

const Paginator = ({totalItemsCount, pageSizes, currentPage, onPageChanged, portionSize = 5}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSizes);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={styles['paginator']}>
            {portionNumber > 1 && <Button sizeClass={'small'}
                                          typeClass={'aqua'}
                                          className={styles.button}
                                          imgSrc={prev}
                                          onClick={()=> {setPortionNumber(portionNumber - 1 )}}
            />}

            {pages.filter(page => {
                return page >= leftPortionPageNumber && page <= rightPortionPageNumber })
                .map(page => {
                    return <PaginationButton onClick={() => {onPageChanged(page)}}
                                             key={page}
                                             value={page}
                                             current={currentPage}
                                             page={page}

                    />
                })}
            {portionCount > portionNumber && <Button sizeClass={'small'}
                                                     typeClass={'aqua'}
                                                     className={styles.button}
                                                     onClick={()=> {setPortionNumber(portionNumber + 1)}}
                                                     imgSrc={next}
            />}
        </div>
    )
}
export default Paginator

