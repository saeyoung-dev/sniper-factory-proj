interface ProfileCard {
  cardImgSrc: string;
  profileImgSrc: string;
  alias: string;
  username: string;
  onClickHandler: (username: string) => void;
}

function ProfileCard({
  cardImgSrc,
  profileImgSrc,
  alias,
  username,
  onClickHandler,
}: ProfileCard) {
  return (
    <article className='card'>
      <div>
        <img className='card-img' src={cardImgSrc} alt='background' />
      </div>
      <div className='profile'>
        <img className='profile-img' src={profileImgSrc} alt='profile' />
        <h3 className='alias'>{alias}</h3>
        <p className='username'>@{username}</p>
        <button type='button' onClick={() => onClickHandler(username)}>
          Follow
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;
