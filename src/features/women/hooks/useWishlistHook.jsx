import { useContext } from "react"
import { MyStore } from "../../../context/contextApi"

export const useWishlistHook = () => {
    const {wishList, addToWishtList} = useContext(MyStore);

    const isWishListed = (product) => {
        return wishList.some((item) => item.id === product.id);
    };

    return {
        wishList,
        addToWishtList,
        isWishListed,
    }
}