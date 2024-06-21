import "../BlogArtcile.css"

export default function BLogArticle({ image, title, content, children }) {
  return (
    <>
      <div className="blogArtcile">
        <h1>{title}</h1>
        <img src={image} alt="" />
        <p>{content}</p>
        <div>{children}</div>
      </div>
    </>
  );
}
