// import Header from "./Header";
// import ImageCard from "./ImageCard";
// import imageData from "../data/initialImages";
// import { useState } from "react";

// const ImageContaner = () => {
//   const [images, setImages] = useState(imageData);
//   const [selected, setSelected] = useState([]);

//   const getSelectedItems = (index) => {
//     setSelected([...selected, index]);
//   };

//   const deleteItems = () => {
//     const filteredItems = images.filter((item) => {
//       return !selected.includes(item.id);
//     });
//     setImages([...filteredItems]);
//     setSelected([]);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow w-[950px]">
//       <Header totalSelected={selected.length} deleteItems={deleteItems} />
//       <div className="p-8 grid grid-cols-5 gap-5">
//         {images?.map((image) => {
//           return (
//             <ImageCard
//               index={image.id}
//               imageSrc={image.src}
//               key={image.id}
//               getSelectedItems={getSelectedItems}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ImageContaner;

// import Header from "./Header";
// import ImageCard from "./ImageCard";
// import imageData from "../data/initialImages";
// import { useRef, useState } from "react";

// const ImageContaner = () => {
//   const [images, setImages] = useState(imageData);
//   const [selected, setSelected] = useState([]);

//   const dragItem = useRef(0);
//   const draggedOverItem = useRef(0);

//   const handleDrag = () => {
//     console.log({ dragItem }, { draggedOverItem });
//     const items = [...images];
//     const temp = items[dragItem.current];
//     items[dragItem.current] = items[draggedOverItem.current];
//     items[draggedOverItem] = temp;
//     setImages(items);
//   };

//   const getSelectedItems = (index) => {
//     setSelected([...selected, index]);
//   };

//   const deleteItems = () => {
//     const filteredItems = images.filter((item) => {
//       return !selected.includes(item.id);
//     });
//     setImages([...filteredItems]);
//     setSelected([]);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow w-[950px]">
//       <Header totalSelected={selected.length} deleteItems={deleteItems} />
//       <div className="p-8 grid grid-cols-5 gap-5">
//         {images?.map((image, index) => {
//           return (
//             <div
//               className={`rounded-md border-gray-300 shadow-sm border cursor-pointer relative transition-opacity ${
//                 index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
//               } group`}
//               key={index}
//               draggable
//               onDragStart={() => {
//                 dragItem.current = index;
//               }}
//               onDragEnter={() => {
//                 draggedOverItem.current = index;
//               }}
//               onDragEnd={handleDrag}
//               onDragOver={(e) => {
//                 e.preventDefault();
//               }}
//             >
//               <ImageCard
//                 id={image.id}
//                 imageSrc={image.src}
//                 getSelectedItems={getSelectedItems}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ImageContaner;

// import Header from "./Header";
// import ImageCard from "./ImageCard";
// import imageData from "../data/initialImages";
// import { useState } from "react";
// import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";

// const ImageContainer = () => {
//   const [images, setImages] = useState(imageData);
//   const [selected, setSelected] = useState([]);

//   const getSelectedItems = (index) => {
//     setSelected([...selected, index]);
//   };

//   const deleteItems = () => {
//     const filteredItems = images.filter((item) => {
//       return !selected.includes(item.id);
//     });
//     setImages([...filteredItems]);
//     setSelected([]);
//   };

//   const handleDragDrop = (results) => {
//     const { source, destination } = results;

//     if (!destination) return;
//     if (source.index === destination.index) return;

//     const reorderedImages = [...images];
//     const [movedItem] = reorderedImages.splice(source.index, 1);
//     reorderedImages.splice(destination.index, 0, movedItem);

//     setImages(reorderedImages);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow w-[950px]">
//       <Header totalSelected={selected.length} deleteItems={deleteItems} />
//       <DragDropContext onDragEnd={handleDragDrop}>
//         <Droppable droppableId="ROOT" type="group">
//           {(provided) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               className="p-8 grid grid-cols-5 gap-5"
//             >
//               {images?.map((image, index) => (
//                 <Draggable
//                   draggableId={image.id.toString()}
//                   key={image.id}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.dragHandleProps}
//                       {...provided.draggableProps}
//                       className={`rounded-md border-gray-300 shadow-sm border cursor-pointer relative transition-opacity ${
//                         index === 0
//                           ? "col-span-2 row-span-2"
//                           : "col-span-1 row-span-1"
//                       } group`}
//                     >
//                       <ImageCard
//                         id={image.id}
//                         imageSrc={image.src}
//                         getSelectedItems={getSelectedItems}
//                       />
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default ImageContainer;

import Header from "./Header";
import ImageCard from "./ImageCard";
import imageData from "../data/initialImages";
import { useRef, useState } from "react";

const ImageContainer = () => {
  const [images, setImages] = useState(imageData);
  const [selected, setSelected] = useState([]);

  const dragItem = useRef(0);
  const draggedOverItem = useRef(0);

  const handleDrag = () => {
    const items = [...images];
    const temp = items[dragItem.current];
    items.splice(dragItem.current, 1);
    items.splice(draggedOverItem.current, 0, temp);
    setImages(items);
  };

  const changePosition = (e, index) => {
    draggedOverItem.current = index;
    const items = [...images];
    const temp = items[dragItem.current];
    items.splice(dragItem.current, 1);
    items.splice(draggedOverItem.current, 0, temp);
    setImages(items);
  };

  const getSelectedItems = (id) => {
    if (!selected.includes(id)) {
      setSelected([...selected, id]);
    } else {
      selected.splice(
        selected.findIndex((item) => item === id),
        1
      );
      setSelected([...selected]);
    }
  };

  const deleteItems = () => {
    const filteredItems = images.filter((item) => {
      return !selected.includes(item.id);
    });
    setImages([...filteredItems]);
    setSelected([]);
  };

  return (
    <div className="bg-white rounded-lg shadow w-[950px]">
      <Header totalSelected={selected.length} deleteItems={deleteItems} />
      <div className="p-8 grid grid-cols-5 gap-5">
        {images?.map((image, index) => {
          return (
            <div
              className={`rounded-md border-gray-300 shadow-sm border cursor-pointer relative transition-opacity ${
                index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              } group`}
              key={index}
              draggable
              onDragStart={() => {
                dragItem.current = index;
              }}
              onDragEnter={(e) => {
                changePosition(e, index);
              }}
              onDragEnd={handleDrag}
              onDragOver={(e) => {
                e.preventDefault();
              }}
            >
              <ImageCard
                id={image.id}
                imageSrc={image.src}
                getSelectedItems={getSelectedItems}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageContainer;
