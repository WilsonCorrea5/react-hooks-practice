export const QuoteItem = ({ author, quote }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <footer className="blockquote-footer"> by {author}</footer>
    </blockquote>
  );
};
