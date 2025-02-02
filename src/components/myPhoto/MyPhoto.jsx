import myPhoto from "/img/myPhoto.jpg";

export default function MyPhoto() {
  return (
    <div className="aboutMe__photo">
      <img src={myPhoto} alt="my photo" />
    </div>
  );
}
