import Image from "next/image";
import TicketCard from "./(components)/TicketCard";
//default page that gets display. Kind of like index.hmtl

const Dashboard = () => {
  return (
    <div className="p-5">
      {/* lg: and xl: are tailwind properties that allo you to specify styling for differnet screen sizes */}
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
