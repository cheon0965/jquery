export default function pageDTO(inpage, total) {
  let startPage, endPage, prev, next, page;
  (function () {
    page = inpage;
    endPage = Math.ceil(page / 10.0) * 10;
    startPage = endPage - 9;

    let realEnd = Math.ceil(total / 10.0);
    endPage = endPage > realEnd ? realEnd : endPage;

    prev = startPage > 1 ? true : false;
    next = endPage == realEnd ? false : true;
  })();
  return { startPage, endPage, prev, next, page };
}
