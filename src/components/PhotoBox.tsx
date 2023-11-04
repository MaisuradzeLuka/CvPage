interface IPhotoBox {
  name: string;
  title?: string;
  avatar: string;
  description?: string;
  styles?: string;
}

const PhotoBox = ({ name, title, avatar, description, styles }: IPhotoBox) => {
  return (
    <div className={`photoBox ${styles}`}>
      <img src={avatar} alt={name} className="photoBox__profImg" />
      <div className="photoBox__body">
        <h1 className="photoBox__body__name">{name}</h1>
        {title && <h2 className="photoBox__body__title">{title}</h2>}
        {description && (
          <p className="photoBox__body__description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PhotoBox;
