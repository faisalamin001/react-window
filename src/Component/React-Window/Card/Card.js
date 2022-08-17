import "./card.css";
export default function Card({ name, title, image }) {
  return (
    <div className='card'>
      <img src={image} alt={title} className='imageStyle' />
      <div className='contentSection'>
        <div className='name'>{name}</div>
        <div className='title'>{title}</div>
      </div>
    </div>
  );
}
