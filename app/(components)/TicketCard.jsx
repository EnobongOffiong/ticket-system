import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ticket}) => {
  return (
    <div className="flex flex-col bg-cards hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 ">
        <PriorityDisplay priority={ticket.priority}/>
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the ticket description! Please do this ticket
      </p>
      {/* flex grow (flex- grow 1) on this empty div allows
       it to take up the rest of the space in the parent container if theres any extra */}
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">08/01/2023 10:22PM</p>
          <ProgressDisplay />
        </div>
        <div className="flex ml-auto items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
