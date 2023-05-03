import { useCounter, useFetch } from "../hooks";
import { QuoteItem } from "./QuoteItem";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  // despues del igual lo que expresamos es: si es falso que *data* es null entonces accede a la posicion 0 del array data.
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <QuoteItem key={quote} author={author} quote={quote} />
      )}

      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next Quote
      </button>
    </>
  );
};
