import './filter-block.css';
import { Component } from 'react';
import PanelFilter from './panel-filter/panel-filter';
import ListFilter from './list-filter/list-filter';




const income = [
  { coinIcon: '/coins.svg', coinName: 'Bitcoin / BTC', invested: 28247315.05, retur: 28254247.99, qty: 1.00, avgBuyingPrice: 22698117.99, currentBuyingPrice: 25821456.51, action: 'Buy' },
  { coinIcon: '/coins.svg', coinName: 'Bitcoin / BTC', invested: 58252488.17, retur: 12215830.59, qty: 14.00, avgBuyingPrice: 98947190.03, currentBuyingPrice: 69702108.02, action: 'Buy' },
  { coinIcon: '/coins.svg', coinName: 'Bitcoin / BTC', invested: 28247357.98, retur: 66215472.01, qty: 2.00, avgBuyingPrice: 30481124.11, currentBuyingPrice: 93572584.49, action: 'Sale' },
  { coinIcon: '/coins.svg', coinName: 'Bitcoin / BTC', invested: 15698731.11, retur: 85212566.22, qty: 3.00, avgBuyingPrice: 15357175.35, currentBuyingPrice: 91214028.35, action: 'Sale' },
]

const incomeTransform = income.map((value) => {
  const id = value.invested
  value.id = id

  const invested = value.invested.toString().split("").reverse().join("").replace(/\d\d\d/g, "$&,").split("").reverse().join("")
  value.invested = invested

  const retur = value.retur.toString().split("").reverse().join("").replace(/\d\d\d/g, "$&,").split("").reverse().join("")
  value.retur = retur

  const qty = `${value.qty}.00`;
  value.qty = qty

  const avgBuyingPrice = value.avgBuyingPrice.toString().split("").reverse().join("").replace(/\d\d\d/g, "$&,").split("").reverse().join("")
  value.avgBuyingPrice = avgBuyingPrice

  const currentBuyingPrice = value.currentBuyingPrice.toString().split("").reverse().join("").replace(/\d\d\d/g, "$&,").split("").reverse().join("")
  value.currentBuyingPrice = currentBuyingPrice

 return value
})

console.log(incomeTransform)


class FilterBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: incomeTransform,
      filter: 'all',
    };
  }

  onFilterSelect = filter => {
    this.setState({ filter });
  };


  filterPost = (data, filter) => {
    switch (filter) {
      case 'sale':
        return data.filter(value => value.action === 'Sale');
      case 'buy':
        return data.filter(value => value.action === 'Buy');
      case 'qty':
        return data.filter(value => value.qty > 2)
      default:
        return data;
    }
  };


  render() {
    const { data, filter } = this.state;
    const displayData = this.filterPost(data, filter);

    return (
      <div className="filter_block">
        <PanelFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        <ListFilter data={displayData}/>
      </div>
    );
  }
}

export default FilterBlock;
