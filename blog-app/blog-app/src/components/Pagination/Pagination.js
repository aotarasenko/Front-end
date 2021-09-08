import { PaginationWrapper } from "./Pagination.styled";

export const Pagination = (props) => {
  const getPagesList = (count) => {
    let pages = [];

    for (let index = 0; index < count; index++) {
      pages.push(index + 1);
    }

    return pages;
  };

  const pagesNumbers = getPagesList(props.pages);

  console.log(props.pages);

  return (
    <PaginationWrapper>
      {pagesNumbers.map((item) => {
        <button key={new Date.now()}>{item}</button>;
      })}
    </PaginationWrapper>
  );
};
