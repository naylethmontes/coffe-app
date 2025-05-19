
import ReviewCard from '../layouts/ReviewCard';
import img1 from '../assets/images/olivia.jpg'
import img2 from '../assets/images/john.jpg'
import img3 from '../assets/images/sofia.jpg'

const reviews = [
  {
    id: 1,
    name: 'Olivia Castillo',
    img: img1,
    comment: '¡Excelente servicio! Muy satisfecho con la atención y el resultado.',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Mateo Bolivar',
    img: img2,
    comment: 'Muy profesional y rápido. Recomendado totalmente.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sofia Avendaño',
    img: img3,
    comment: 'Buena experiencia en general.',
    rating: 4,
  },
]

export default function Review() {

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-background ">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 ">
        Comentarios de los clientes
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            img={review.img}
            title={review.name}
            comment={review.comment}
            rating={review.rating}
          />
        ))}

      </div>
    </div>
  );
}
