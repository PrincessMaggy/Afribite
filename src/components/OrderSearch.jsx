import searchIcon from "../assets/search.svg";

const OrderSearch = () => {
    return(
        <div className="flex flex-row p-10 size-10 rounded-[10px] bg-eggshell">
            <p>Search</p>
            <img src={searchIcon}></img>
            
        </div>
    );
};

export default OrderSearch;