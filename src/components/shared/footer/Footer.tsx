import { commentData } from "../../../constatnce/commentData";
import CommentCard from "../../base/CommentCard";
import "../../../style/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Footer() {
	return (
		<div className="flex flex-col items-center gap-8 bg-gradient-to-br from-teal-200 via-purple-200 to-rose-100 w-full h-fit px-5 pt-5 pb-2">
			<Swiper
				slidesPerView={1}
				slidesPerGroup={1}
				spaceBetween={20}
				// cssMode={true}
				navigation
				pagination={{ clickable: true }}
				mousewheel
				keyboard
				breakpoints={{
					768: {
						slidesPerView: 3,
						slidesPerGroup: 3,
						spaceBetween: 20,
					},
				}}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="mySwiper"
			>
				{commentData.map((item, index) => (
					<SwiperSlide key={index} className="flex items-center justify-center">
						<CommentCard item={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
