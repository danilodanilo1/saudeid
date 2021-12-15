import React from 'react';
import { Items } from '../../organisms/users/items';

export default function Item({ jsonUser }) {
  return (
    <>
      {jsonUser.data.map((item, i) => (
        <Items key={i} data={item} />
      ))}
    </>
  );
}
