import './item-list-filter.css'


const ItemListFilter = (props) => {

  const { coinIcon, coinName, invested, retur, qty, avgBuyingPrice, currentBuyingPrice, action } = props;



  return (
    <tr className='item_list_filter'>
      <td><img src={coinIcon} alt="" />{coinName}</td>
      <td>{ '₹'+ invested}</td>
      <td>{ '+₹'+ retur}</td>
      <td>{ 'B '+ qty + ' BTC'}</td>
      <td>{ '₹'+ avgBuyingPrice}</td>
      <td>{ '₹'+ currentBuyingPrice}</td>
      <td>{action}</td>
    </tr>
  );
}

export default ItemListFilter;