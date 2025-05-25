import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import ItemList from "./ItemList";
import { useState } from "react";

// ! controlled Component - control is over to its parent
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);

  // ! Modifying state variable of the parent from children (showindex)
  // * track the current index (title) and return back to the parent and change the state of that particular index (title), if the index is same as previous selected index it will close that too
  const handleClick = () => {
    // console.log('clicked')
    setShowIndex()
  }

  return (
    <>
      <div className="border-b-1 border-b-neutral-300 shadow-md text-shadow-gray-200 rounded-sm mt-3 p-4">
        {/* Accordian Header */}
        <div className="flex items-center justify-between mb-1 cursor-pointer" onClick={handleClick}>
          <p className="text-sm font-medium text-black">
            {data?.title?.toUpperCase()} ({data?.itemCards?.length})
          </p>
          <span>
            {showItems ? (
              <ChevronDownIcon className="h-5 w-5 text-black" />
            ) : (
              <ChevronUpIcon className="h-5 w-5 text-black" />
            )}
          </span>
        </div>

        {/* Accordian Body */}
        {showItems && 
          data.itemCards.map((items) => (
            <ItemList key={items.card.info.id} itemData={items.card.info} />
          ))
        }
      </div>
    </>
  );
};
export default RestaurantCategory;
