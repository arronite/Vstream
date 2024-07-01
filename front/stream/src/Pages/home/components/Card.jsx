const Card = ({ card }) => {
  if (!card) {
    // Handle case where card data is not available
    return <div>No card data</div>;
  }
  const pageChange = (rand_id) => {
    window.location.href = `/video/${rand_id}`;
  };

  return (
    <div className="px-4 py-5 cursor-pointer rounded-tl-lg rounded-bl-lg hover:bg-slate-900">
      <div
        className="flex w-full gap-5 "
        onClick={() => pageChange(card.rand_id)}
      >
        <div className="w-1/5 ">
          <img
            style={{ height: "300px", width: "500px" }}
            className="rounded-md"
            src={card.thumbnail}
            alt=""
          />
        </div>
        <div className="w-4/5 flex flex-col">
          <div className="">
            <span className="text-4xl font-bold text-cyan-100">
              {card.title}
            </span>
          </div>

          <div className="">
            <span className="text-sm font-medium text-slate-400">
              {card.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
