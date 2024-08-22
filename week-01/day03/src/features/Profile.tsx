import ProfileCard from '../components/ProfileCard';

// 더미 데이터
const profileData = [
  {
    id: 1,
    cardImgSrc:
      'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    profileImgSrc:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    alias: 'Effy',
    username: 'Saeyoung',
  },
  {
    id: 2,
    cardImgSrc:
      'https://images.pexels.com/photos/27598714/pexels-photo-27598714.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    profileImgSrc:
      'https://images.pexels.com/photos/326372/pexels-photo-326372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    alias: 'XCX',
    username: 'Charlie',
  },
  {
    id: 3,
    cardImgSrc:
      'https://images.pexels.com/photos/19200759/pexels-photo-19200759.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    profileImgSrc:
      'https://images.pexels.com/photos/24783996/pexels-photo-24783996.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    alias: 'Eilish',
    username: 'Billie',
  },
];

function Profile() {
  const onClickHandler = (username: string) => {
    alert(`Followed @${username}!`);
  };

  return (
    <>
      {profileData.map((profile) => (
        <ProfileCard
          key={profile.id}
          cardImgSrc={profile.cardImgSrc}
          profileImgSrc={profile.profileImgSrc}
          alias={profile.alias}
          username={profile.username}
          onClickHandler={onClickHandler}
        />
      ))}
    </>
  );
}

export default Profile;
