import ItemListFilter from './item-list-filter/item-list-filter';
import './list-filter.css';

function ListFilter({ data }) {
  const element = data.map(value => {
    const { id, ...itemProps } = { ...value };
    return <ItemListFilter key={id} {...value} />;
  });

  return (
    <table className="coins_table">
      <thead >
        <tr className='coins_table_head'>
          <th className='a'>Coin Name</th>
          <th>Invested (INR)</th>
          <th>Return (INR)</th>
          <th>Qty.</th>
          <th>Avg. Buying Price</th>
          <th>Current Buying Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className='coins_table_body'>{element}</tbody>
    </table>
  );
}

export default ListFilter;
