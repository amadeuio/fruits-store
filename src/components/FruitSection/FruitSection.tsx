import { useAppContext } from "../../Context";
import styles from "./FruitSection.module.css";
import filterFruits from "../../utils/filterFruits";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useEffect } from "react";

import FruitItem from "./FruitItem/FruitItem";
import ActiveFilters from "./ActiveFilters/ActiveFilters";
import ChevronIcon from "../../icons/ChevronIcon";

const FruitSection = () => {
  const { fruits, filters } = useAppContext();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    setItemOffset(0);
  }, [filters]);

  const endOffset = itemOffset + itemsPerPage;

  const filteredFruits = filterFruits(fruits, filters);

  const currentItems = filteredFruits.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(filteredFruits.length / itemsPerPage);

  const hasMultiplePages = pageCount > 1;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredFruits.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={styles.fruitSection}>
        <h2 className={styles.title}>
          Items ({filteredFruits.length}){" "}
          {filters.favorite && (
            <span className={styles.favoritesTitle}>
              <span className={styles.emDash}>—</span> Favorites
            </span>
          )}
        </h2>
        <ActiveFilters />
        {filteredFruits.length === 0 ? (
          <p className={styles.noMatch}>No fruits match the current filters.</p>
        ) : (
          <>
            <div className={styles.fruitGrid}>
              {currentItems.map((fruit) => (
                <FruitItem key={fruit.id} fruit={fruit} />
              ))}
            </div>
            {hasMultiplePages && (
              <ReactPaginate
                className={styles.paginate}
                pageLinkClassName={styles.pageNumber}
                activeLinkClassName={styles.activePageNumber}
                previousLinkClassName={styles.previousPage}
                nextLinkClassName={styles.nextPage}
                disabledLinkClassName={styles.disabledPage}
                breakLabel="..."
                nextLabel={<ChevronIcon className={styles.chevron} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<ChevronIcon className={styles.chevron} pointsLeft={true} />}
                renderOnZeroPageCount={null}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FruitSection;
