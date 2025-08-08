
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
    <div
      id="reviews"
      className="flex flex-col w-full lg:w-2/6 bg-white/80 border border-[#e8ddd3] shadow-md hover:shadow-lg p-4 rounded-2xl gap-5 transition-all duration-300"
    >
      <div className="flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img
            className="rounded-full border border-[#d6c4b4] shadow-sm object-cover"
            src={img}
            alt={title}
          />
        </div>

        <div className="mx-3">
          <h2 className="font-semibold text-lg text-[#4b3729]">{title}</h2>
          <div className="flex">{renderStars()}</div>
        </div>

        <span className="ml-auto pr-2 text-[#b38358]">
          <FaQuoteRight size={32} />
        </span>
      </div>

      <p className="text-center text-[#5e4535] text-sm leading-relaxed italic">
        “{comment}”
      </p>
    </div>
  );
}

export default ReviewCard;