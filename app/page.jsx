import Image from "next/image";
import TicketCard from "./(components)/TicketCard";
//default page that gets display. Kind of like index.hmtl

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      method: "GET",
      cache: "no-store", //response of this request should not be stored in any cache
    });

    return res.json();
  } catch (error) {
    console.log(error);
    console.error(error);
  }
};
const Dashboard = async () => {
  const { tickets } = await getTickets(); // destructure object

  //array for category types
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              {/* lg: and xl: are tailwind properties that allo you to specify styling for differnet screen sizes */}
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
