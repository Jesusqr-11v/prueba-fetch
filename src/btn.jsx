export const Btn = ({ page, setPage }) => {
  const back = page <= 1 ? 42 : page - 1;
  const next = page >= 42 ? 1 : page + 1;
  return (
    <header>
      <p>Page: {page}</p>
      <div>
        <button
          onClick={() => {
            setPage(back);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage(next);
          }}
        >
          Next
        </button>
      </div>
    </header>
  );
};
