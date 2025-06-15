import {CON_URL} from '../utils/constants'

const CartItemList = ({ itemData, onRemove }) => {
  return (
    <>
      <div className="flex items-center justify-between my-5 pb-3 border-b-1 border-gray-400">
        <div className="w-9/12">
          <div className="text-md font-bold">{itemData?.name}</div>
          <p className="text-md font-mono">
            ₹
            {itemData?.price
              ? itemData?.price / 100
              : itemData?.defaultPrice / 100}
          </p>
          <p className="text-xs text-gray-500">{itemData?.description}</p>
        </div>
        <div className="w-3/12 flex justify-center relative">
          <img
            src={CON_URL + itemData?.imageId}
            className="w-32 rounded-md"
            alt={itemData?.name}
          />
          <button
            className="absolute text-sm bg-black hover:bg-gray-700 text-white cursor-pointer px-2 py-1 bottom-0 rounded-md"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItemList;
