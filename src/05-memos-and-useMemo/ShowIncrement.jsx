import React from 'react';

export const ShowIncrement = React.memo(({ toincrement }) => {
    console.log('hey soy yo');
  return (
    <button
      onClick={() => {
        toincrement(2);
      }}
      className="btn btn-primary"
    >
      Increment
    </button>
  );
}
);