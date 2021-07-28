// DEPENDENCIES
import { memo } from "react";
import { useHistory } from "react-router-dom";

// COMPONENTS
import { Pagination } from "../Pagination/Pagination";

// STYLES
import { StyledTable, StyledContainer, StyledItem } from "./styles";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  items: any[];
  page: any;
  handlePage(page: number): void;
}

const Table = memo<IProps>(({ items, page, handlePage }) => {
  const history = useHistory();

  return (
    <StyledTable>
      <StyledContainer>
        {items.map((item) => (
          <StyledItem
            key={item.id}
            onClick={() =>
              history.push({ pathname: "/Movie", search: `?id=${item.id}` })
            }
          >
            {item.image}
            <h4>{item.title}</h4>
            <div className="info">
              <strong>
                <FontAwesomeIcon icon={faStar} color="red" /> {item.voteAverage}
              </strong>
              <strong>
                <FontAwesomeIcon icon={faUser} /> {item.voteCount}
              </strong>
            </div>
          </StyledItem>
        ))}
      </StyledContainer>

      {/* ---- PAGINATION ---- */}
      {page && (
        <Pagination
          itemsPerPage={page.itemsPerPage}
          totalItems={page.totalItems}
          totalPages={page.totalPages}
          currentPage={page.currentPage}
          handlePage={handlePage}
        />
      )}
    </StyledTable>
  );
});

export { Table };
