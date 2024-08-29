import { star } from '../../assets/assets';

const MovieItem = ({
  title,
  imgUrl,
  starRate,
  realeaseDate,
}: {
  title: string;
  imgUrl: string;
  starRate: number;
  realeaseDate: string;
}) => {
  const getYear = (date: string) => date.split('-')[0];
  const parseStarRate = (rate: number) => rate.toFixed(1);

  return (
    <>
      <div>
        <img src={imgUrl} alt='' className='rounded-md w-full' />
        <div className='flex justify-between items-center font-bold mt-4 mb-2 text-lg'>
          <h4 className=''>{title}</h4>
        </div>
        <div className='flex justify-between items-center text-sm text-gray-200'>
          <div className='flex items-center gap-2 font-bold'>
            <img
              src={star}
              alt='star'
              width={18}
              height={18}
              className='object-contain'
            />
            <span className='text-yellow-500'>{parseStarRate(starRate)}</span>
          </div>
          <span className='text-yellow-500 font-bold'>
            {getYear(realeaseDate)}
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieItem;
