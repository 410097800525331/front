import './css/reset.css'
import './css/BoxOfficeCard.css'
// public 폴더에 이미지가 들어있을 때('/'로 시작)
// import poster from '/img/YiSbqEf6OvFcDoLoQCipDojOHqMCwKG4_420.jpg'
// src 폴더에 이미지가 들어있을 때('./'로 시작)
// import mx4d from './img/type_mega_mx4d.png'

function BoxOfficeCard({data}) {
  // props

  return (
    <div className="box_office_card">
      <div className="inner">
        <div className="front">
          <span className="rank">{data.rank}</span>
          <div className="poster">
            <img src={data.poster} alt={data.title} />
          </div>
          <div className="screen_type">
            {/* {data.screenTypes.map((ele, idx)=><img src={data.screenTypes[idx]} alt="screen types" />)} */}
            {data.screenTypes.map(ele=><img key={ele} src={ele} alt="screen types" />)}
          </div>
          <div className="grade">
            <img src={data.grade} alt={"Movie Grade" + data.age} />
          </div>
        </div>
        <div className="back">
          <p>{data.description}</p>
          <div className="score">관람평<span>{data.score}</span></div>
        </div>
      </div>
      <div className="btn">
        <button type="button" className="like">
          <i className="fa-solid fa-heart"></i>{data.like}
        </button>
        <a href="https://www.megabox.co.kr/booking" className="reservation_link">예매</a>
      </div>
    </div>
  );
}

export default BoxOfficeCard;
