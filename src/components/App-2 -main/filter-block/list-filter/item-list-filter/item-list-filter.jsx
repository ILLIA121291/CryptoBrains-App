import './item-list-filter.css'


const ItemListFilter = (props) => {

  const { coinIcon, coinName, invested, retur, qty, avgBuyingPrice, currentBuyingPrice, action } = props;

  const actionClazz = action == 'Buy' ? 'actionClazzGreen' : 'actionClazzRed'


  return (
    <tr className='item_list_filter'>
      <td><img src={coinIcon} alt="" className='coin_icon'/>{coinName}</td>
      <td>{ '₹'+ invested}</td>
      <td>{ '+₹'+ retur}</td>
      <td>{ 'B '+ qty + ' BTC'}</td>
      <td>{ '₹'+ avgBuyingPrice}</td>
      <td>{ '₹'+ currentBuyingPrice}</td>
      <td className={actionClazz}>{action}</td>
    </tr>
  );
}

export default ItemListFilter;