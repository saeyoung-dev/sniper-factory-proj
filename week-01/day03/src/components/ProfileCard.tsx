type ProfileCard = {
  cardImgSrc: string;
  profileImgSrc: string;
  alias: string;
  username: string;
  onClickHandler: (username: string) => void;
};

function ProfileCard(props: ProfileCard) {
  return (
    <article className='card'>
      <div>
        <img className='card-img' src={props.cardImgSrc} alt='background' />
      </div>
      <div className='profile'>
        <img className='profile-img' src={props.profileImgSrc} alt='profile' />
        <h3 className='alias'>{props.alias}</h3>
        <p className='username'>@{props.username}</p>
        <button
          type='button'
          onClick={() => props.onClickHandler(props.username)}
        >
          Follow
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;
