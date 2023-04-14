// import { useState } from "react";
// import { Link } from "react-router-dom";
// import movies from "../data/movieList";

// const Header = () => {
//   const [sortButtons, setSortButtons] = useState([
//     "Sort by Date Ascending",
//     "Sort by Date Descending",
//     "Best Rate",
//     "A-Z",
//     "Z-A",
//   ]);

//   const [ascYearSortMovies, setAscYearSortMovies] = useState([...movies]);
//   const [descYearSortMovies, setDescYearSortMovies] = useState([...movies]);
//   const [bestRateSortMovies, setBestRateSortMovies] = useState([...movies]);
//   const [aToZSortMovies, setAToZSortMovies] = useState([...movies]);
//   const [zToASortMovies, setZToASortMovies] = useState([...movies]);

//   const handleSortAscClick = (sortButton) => {
//     if (sortButton === "Sort by Date Ascending") {
//       const sortedMovies = [...ascYearSortMovies].sort((a, b) => {
//         const yearA = parseInt(a.year);
//         const yearB = parseInt(b.year);
//         return yearA - yearB;
//       });
//       setAscYearSortMovies(sortedMovies);
//       handleSortAscClick();
//     }
//   };
//   const handleSortDescClick = () => {
//     const sortedMovies = [...descYearSortMovies].sort((a, b) => {
//       const yearA = parseInt(a.year);
//       const yearB = parseInt(b.year);
//       return yearB - yearA;
//     });
//     setDescYearSortMovies([...sortedMovies]);
//   };

//   const handleSortBestRateClick = () => {
//     const sortedMovies = [...bestRateSortMovies].sort((a, b) => {
//       return b.rating - a.rating;
//     });
//     setBestRateSortMovies([...sortedMovies]);
//   };
//   const handleSortAToZClick = () => {
//     const sortedMovies = [...aToZSortMovies].sort((a, b) => {
//       const titleA = a.title.toUpperCase();
//       const titleB = b.title.toUpperCase();
//       if (titleA < titleB) {
//         return -1;
//       }
//       if (titleA > titleB) {
//         return 1;
//       }
//       return 0;
//     });
//     setAToZSortMovies([...sortedMovies]);
//   };
//   const handleSortZToAClick = () => {
//     const sortedMovies = [...zToASortMovies].sort((a, b) => {
//       const titleA = a.title.toUpperCase();
//       const titleB = b.title.toUpperCase();
//       if (titleA < titleB) {
//         return 1;
//       }
//       if (titleA > titleB) {
//         return -1;
//       }
//       return 0;
//     });
//     setZToASortMovies([...sortedMovies]);
//   };

//   return (
//     <header>
//         let handleClick;
//         switch (sortButton) {
//           case "Sort by Date Ascending":
//             handleClick = handleSortAscClick;
//             break;
//           case "Sort by Date Descending":
//             handleClick = handleSortDescClick;
//             break;
//           case "Best Rate":
//             handleClick = handleSortBestRateClick;
//             break;
//           case "A-Z":
//             handleClick = handleSortAToZClick;
//             break;
//           case "Z-A":
//             handleClick = handleSortZToAClick;
//             break;
//           default:
//             handleClick = () => {};
//             break;
//         }
//         return (
         
//         );
//     </header>
//   );
// };

// export default Header;
