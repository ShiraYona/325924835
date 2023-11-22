// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const GetDates=()=>{
   
//     const location = useLocation();
//     const state1 = location.state.start;
//     const state2 = location.state.end;


//     useEffect(()=>{
//         get()
//     },[])
    
//     async function get() {
//         try {
//           const response = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${state1}&end=${state2}`);
//           const data = await response.json();
//           if(data===[])
//             console.log("you have wrote reverse dates")     
//           console.log(data);
//         } catch (error) {
//           alert("failed to fetch");
//         }
//       }
// return(
// <>

// </>)
// }
// export default GetDates