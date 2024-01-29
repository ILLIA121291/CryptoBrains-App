import ItemListFilter from './item-list-filter/item-list-filter';
import './list-filter.css';

function ListFilter({ data }) {
  const element = data.map(value => {
    const { id, ...itemProps } = { ...value };
    return <ItemListFilter key={id} {...value} />;
  });

  return (
    <table className="coins_table">
      <thead className='coins_table_head'>
        <tr>
          <td className='a'>Coin Name</td>
          <td>Invested (INR)</td>
          <td>Return (INR)</td>
          <td>Qty.</td>
          <td>Avg. Buying Price</td>
          <td>Current Buying Price</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody className='coins_table_body'>{element}</tbody>
    </table>
  );
}

export default ListFilter;
