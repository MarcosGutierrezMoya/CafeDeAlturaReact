
function CheckLands(props) {
    const lands = Object.values(props);
    
    return(
        <select className="w-full border border-inputBorder rounded-6px px-13px py-9px text-12 outline-none">
            {lands.map(land=>{
                return(
                    <option value={land} >{land}</option>
                )
            })}
        </select>
    )
}

export default CheckLands;