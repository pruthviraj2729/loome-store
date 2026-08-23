// import { useMemo, useState } from "react";
// // import { useProductsApiHook } from "./useProductsApiHook";

// const useSearch = () => {
//   const [search, setSearch] = useState("");

//   const { data: products = [], isLoading } = useProductsApiHook();

//   const searchResults = useMemo(() => {
//     if (!search.trim()) {
//       return [];
//     }

//     const searchTerm = search.toLowerCase().trim();

//     return products.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm)
//     );
//   }, [search, products]);

//   const clearSearch = () => {
//     setSearch("");
//   };

//   return {
//     search,
//     setSearch,
//     searchResults,
//     clearSearch,
//     isLoading,
//   };
// };

// export default useSearch;