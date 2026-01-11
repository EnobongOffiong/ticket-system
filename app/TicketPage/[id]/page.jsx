import TicketForm from "@/app/(components)/TicketForm";

const TicketPage = async ({ params }) => {
  const { id } = await params; // params in api must be treated asynchronously using await
  return <TicketForm />;
};

export default TicketPage;
