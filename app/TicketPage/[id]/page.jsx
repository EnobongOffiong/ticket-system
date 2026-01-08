
const TicketPage = async ({params}) => {
  const {id} = await params // params in api must be treated asynchronously using await
  return (
    <div>TicketPage {id}</div>
  )
}

export default TicketPage