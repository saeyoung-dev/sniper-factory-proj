import Section from './Section';

function Main() {
  const onClickHandler = (title: string) => {
    alert(`Click ${title}`);
  };
  return (
    <main>
      <Section
        id={1}
        title='소개'
        desc='여기에 소개 내용을 작성하세요.'
        onClickHandler={onClickHandler}
      />
      <Section
        id={2}
        title='서비스'
        desc='여기에 제공하는 서비스 내용을 작성하세요.'
        onClickHandler={onClickHandler}
      />
      <Section
        id={3}
        title='연락처'
        desc='여기에 연락처 정보를 작성하세요.'
        onClickHandler={onClickHandler}
      />
    </main>
  );
}

export default Main;
