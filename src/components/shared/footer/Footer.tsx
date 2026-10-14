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
		<div className="flex flex-col items-center gap-8 bg-gradient-to-br from-teal-200 via-purple-200 to-rose-100 w-full h-fit px-10 py-5">
			<Swiper
				cssMode={true}
				navigation={true}
				pagination={true}
				mousewheel={true}
				keyboard={true}
				modules={[Navigation, Pagination, Mousewheel, Keyboard]}
				className="w-full mySwiper"
			>
				<SwiperSlide className="flex items-center justify-center">
					<div className="grid grid-cols-3 gap-5 px-15 pb-10">
						{commentData.map((item, index) => (
							<CommentCard item={item} key={index} />
						))}
					</div>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center">
					<div className="grid grid-cols-3 gap-5 px-15 pb-10">
						{commentData.map((item, index) => (
							<CommentCard item={item} key={index} />
						))}
					</div>
				</SwiperSlide>
				<SwiperSlide className="flex items-center justify-center">
					<div className="grid grid-cols-3 gap-5 px-15 pb-10">
						{commentData.map((item, index) => (
							<CommentCard item={item} key={index} />
						))}
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
