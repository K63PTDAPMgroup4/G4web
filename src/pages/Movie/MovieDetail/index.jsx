
import { useParams } from 'react-router-dom'

const data = [
  {
    id: 1,
    poster: 'https://i.pinimg.com/474x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg',
    name: 'Harry porter',
    slug: 'harry-porter',
    director: 'John Doe',
    releaseDate: '25/01/2024',
    genre: 'Hành động, nhập vai, tình cảm',
    duration: '120p',
    language: 'tiếng anh',
    description:
      'No Way Up xoay quanh các nhân vật có xuất thân rất khác nhau gặp nhau khi chiếc máy bay họ đang di chuyển đâm xuống Thái Bình Dương. Chiếc máy bay gặp sự cố phải dừng lại một cách nguy hiểm gần rìa của một khe núi không đáy. Khi nguồn cung cấp không khí của họ nhanh chóng cạn kiệt, một cuộc chiến sinh tồn khi họ phải đối mặt với các hung thần đại dương - Cá Mập.',
    trailer: 'https://www.youtube.com/embed/5g4lY8Y3eoo'
  }
]

function MovieDetail() {
  const { slug } = useParams()
  const movie = data.find((item) => item.slug === slug)

  return (
    <div className="page-container">
      <h1 className="text-center text-primary font-semibold text-3xl my-4">Movie Detail</h1>
      <div className="flex gap-x-10 justify-start">
        <div>
          <img
            src={data[0].poster}
            alt=""
            className="w-[500px] h-[600px] object-cover  rounded-lg"
          />
        </div>
        <div className="content">
          <h2 className=" text-xl font-semibold">{data[0].name}</h2>
          <ul className="list-disc">
            <li>Đạo diễn: {data[0].director}</li>
            <li>Ngày phát hành: {data[0].releaseDate}</li>
            <li>Thể loại: {data[0].genre}</li>
            <li>Thời lượng: {data[0].duration}</li>
            <li>Ngôn ngữ: {data[0].language}</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center pb-6 text-white rounded-b-none relative">
          <div className="triangle-left"></div>
          <div className="text-center bg-red-500 py-2 px-6 border-r-transparent inline-flex justify-center gap-x-4 text-lg relative z-10">
            <div className="triangle-left"></div>
            <h1 className="ml-3 cursor-pointer hover:opacity-90 hover:text-secondary">Chi tiết</h1>
            <button onClick={() => window.open(data[0].trailer, '_blank')} className="ml-3 cursor-pointer hover:opacity-90 hover:text-secondary">Trailer</button>
            <div className="triangle-right"></div>
          </div>
        </div>
      </div>
      <p className="text-sm">
        {data[0].description}
      </p>
    </div>
  )
}

export default MovieDetail