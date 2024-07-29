



export default function Table() {
  return(
    <div className={`container`}>
      <h1 className={`text-center mb-2`}>Акция</h1>
      <div>
          <div className={`grid grid-cols-3`}>
            <div className={`text-3xl text-center border-2 p-2`}>Оплата за 3 месяца</div>
            <div className={`text-3xl text-center border-2 p-2`}>Скидка 5%</div>
            <div className={`text-3xl text-center border-2 p-2`}>285 000 сум/мес</div>
          </div>
        <div className={`grid grid-cols-3`}>
          <div className={`text-3xl text-center border-2 p-2`}>Оплата за 6 месяца</div>
          <div className={`text-3xl text-center border-2 p-2`}>Скидка 10%</div>
          <div className={`text-3xl text-center border-2 p-2`}>270 000 сум/мес</div>
        </div>
        <div className={`grid grid-cols-3`}>
          <div className={`text-3xl text-center border-2 p-2`}>Оплата за 12 месяца</div>
          <div className={`text-3xl text-center border-2 p-2`}>Скидка 15%</div>
          <div className={`text-3xl text-center border-2 p-2`}>255 000 сум/мес</div>
        </div>
      </div>
    </div>
  )
}
