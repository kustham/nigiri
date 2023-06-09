'use client'
import kabaddiStyles from '@/styles/components/kabaddi.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CoreRule from './kabaddi/court'
import RaidRule from './kabaddi/raid'
import AntiRule from './kabaddi/anti'

SwiperCore.use([Pagination, Navigation])

// do not use grid layout
const KabaddiBoard = () => {
    const ruleComponents = [
        { id: 'core', rule: CoreRule },
        { id: 'raid', rule: RaidRule },
        { id: 'anti', rule: AntiRule },
    ]

    return (
        <section className={kabaddiStyles.kbdSection}>
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                navigation
                loop={true}
                className={kabaddiStyles.ruleSwiper}
            >
                {ruleComponents.map(({ id, rule }) => (
                    <SwiperSlide key={id} className={kabaddiStyles.rulePanel}>
                        {rule}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default KabaddiBoard
