
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa';

function ReviewCard({ img, title, comment, rating }) {

  const renderStars = () => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <BsStarFill key={`full-${i}`} className='text-brightColor' />
        ))}
        {hasHalfStar && <BsStarHalf className='text-brightColor' />}
        {[...Array(emptyStars)].map((_, i) => (
          <BsStar key={`empty-${i}`} className='text-brightColor' />
        ))}
      </>
    )
  }


  return (
    <div id='reviews'
      className=" flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
      <div className=" flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img className=" rounded-full" src={img} alt="title" />
        </div>
        <div className=" mx-3">
          <h2 className=" font-semibold text-lg">{title}</h2>
          <div className=" flex">{renderStars()}</div>
        </div>
        <span className=" ml-16">
          <FaQuoteRight className=" text-brightColor" size={42} />
        </span>
      </div>
      <p className='text-center'>
        {comment}
      </p>
    </div>
  );
}
export default ReviewCard