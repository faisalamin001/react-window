import { FixedSizeList } from "react-window";
import { useCallback } from "react";
import { UsersData } from "../Data";
import "./window.css";
import Card from "./Card/Card";

export default function Rwindow() {
  const Row = useCallback(({ index, style }) => {
    const { image, name, title } = UsersData[index] || {};

    return (
      <div style={style}>
        <Card image={image} name={name} title={title} />
      </div>
    );
  }, []);
  return (
    <div className='App'>
      <div className='cardsContainer'>
        <FixedSizeList
          height={400}
          width={400}
          itemSize={150}
          itemCount={UsersData.length}
        >
          {Row}
        </FixedSizeList>
      </div>
    </div>
  );
}
