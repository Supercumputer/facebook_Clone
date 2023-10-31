import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SpayItem from '../SpayItem/SpayItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { getSpays } from '../../Api/service';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function NewSpaper() {
    const [spay, setSpay] = useState([]);
    

    useEffect(() => {
        getSpayApi();
    }, []);

    const getSpayApi = async () => {
        try {
            let res = await getSpays();
            if (res) {
                setSpay(res.data);
            }
        } catch (error) {}
    };
    
    return (
        <div className="mb-4">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                //   pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                //   onSwiper={(swiper) => console.log(swiper)}
                //   onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <SpayItem />
                </SwiperSlide>
                {spay.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <SpayItem name={item.name} img={item.img} avata={item.avata} />
                        </SwiperSlide>
                    );
                })}

                {/* <SwiperSlide>
                    <SpayItem firstName={'quang ho van'} />
                </SwiperSlide>
                <SwiperSlide>
                    <SpayItem firstName={'quang ho van'} />
                </SwiperSlide>
                <SwiperSlide>
                    <SpayItem firstName={'quang ho van'} />
                </SwiperSlide>
                <SwiperSlide>
                    <SpayItem firstName={'quang ho van'} />
                </SwiperSlide>
                <SwiperSlide>
                    <SpayItem firstName={'quang ho van'} />
                </SwiperSlide>
                <SwiperSlide>
                    <SpayItem firstName={'quang ho van'} />
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
}

export default NewSpaper;
