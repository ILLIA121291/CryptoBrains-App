import "./panel-filter.css"


const PanelFilter = (props) => {
  const buttonData = [
    {name: 'all' , label:'All' },
    {name: 'sale' , label:'Sale' },
    {name: 'buy' , label:'Buy' },
    {name: 'qty', label: 'Qty > 2'},
  ]

  const buttons = buttonData.map(({name, label}) => {
    
    const active = props.filter === name
    const clazz = active ? 'activ_btn' : 'others_btn'
    
    return (
      <button 
      key={name} 
      type='button'
      name={name} 
      onClick={() => props.onFilterSelect(name)}
      className={`btn-general ${clazz}`} >{label}</button>
    )
  })

    return (
      <div className="contaner_for_filter_buttons">
        {buttons}
      </div>
    );

  }


export default PanelFilter;