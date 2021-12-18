import React from "react";
import AccordianItem from "./AccordianItem";

function Accordian(props) {
  const itemList = props.items.map((item, index) => {
    return <AccordianItem item={item} index={index} key={index} />;
  });
  return (
    <div className="ui styled accordion" id="accordion">
      {itemList}
    </div>
  );
}

export default Accordian;

// let active;
// function Accordian(props) {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [activeBool, setActiveBool] = useState(false);
//   const onTiltleClick = (index) => {
//     setActiveIndex(index);

//   };

//   const itemList = props.items.map((item, index) => {
//     active = activeIndex === index ? "active" : "";
//     return (
//       <div onClick={() => onTiltleClick(index)}>
//         <div className={`title ${active}`}>
//           <i className="dropdown icon"></i>
//           {item.title}
//         </div>
//         <div className={`content ${active}`}>
//           <p id="accordion">{item.content}</p>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <div className="ui styled accordion" id="accordion">
//       {itemList}
//     </div>
//   );
// }
