function AddressCart({ id, state, name, phoneNumber, city, pinCode, district, address, isSelected, onSelect, onEdit, onDeliver, onToggle, isExpanded }) {
    return (
      <>
        <div className='w-full ml-7 max-w-xl flex justify-center bg-white text-black shadow-lg rounded-lg overflow-hidden relative p-4 items-center' onClick={()=>onToggle(id)}>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(id)} // Call onSelect with the address ID
            className="mr-2"
          />
          <div className="flex flex-col">
            {/* ✅ Fixed div issue */}
            <div className='relative w-full mt-3 ml-6'>
              <div className="flex justify-center gap-20 -ml-6">
                <h2 className="text-xl p-2 font-bold">{name}</h2>
                <p className="text-xl p-2 font-bold">{phoneNumber}</p>
                <button className='bg-red-500 py-2 px-4 rounded-lg font-bold hover:bg-red-600 text-sm'
                  onClick={() => onEdit(id)}
                > Edit</button>
              </div>
            </div>
  
            {isExpanded && (
              <>
                <div>
                  <div className='p-4 flex flex-col flex-grow'>
                    <div className='flex justify-between'>
                      <h3 className='text-md font-semibold text-black'>{state}, {district}</h3>
                    </div>
                    <p className='text-black text-md mt-2'>{address}, {city}</p>
                    <p className='text-gray-500 text-sm'>Pin Code: {pinCode}</p>
                  </div>
                </div>
                <button className='bg-red-500 w-2/3 p-2 rounded-lg font-bold hover:bg-red-600 text-sm'
                  onClick={() => onDeliver(id)}
                > Delivery Here</button>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
  
  export default AddressCart;
  