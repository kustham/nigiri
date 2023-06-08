'use client'
import KabaddiStyle from '@/styles/components/kabaddi.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CoreRule from './kabaddi/core'
import RaidRule from './kabaddi/raid'
import AntiRule from './kabaddi/anti'
import MatchRule from './kabaddi/match'

SwiperCore.use([Pagination, Navigation])

const KabaddiBoard = () => {
    const ruleComponents = [
        { id: 'core', rule: CoreRule },
        { id: 'raid', rule: RaidRule },
        { id: 'anti', rule: AntiRule },
        { id: 'match', rule: MatchRule },
    ]

    return (
        <section className={KabaddiStyle.kbdSection}>
            <h2>ルール概要</h2>
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                navigation
                loop={true}
            >
                {ruleComponents.map(({ id, rule }) => (
                    <SwiperSlide key={id} className={KabaddiStyle.rulePanel}>
                        {rule}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default KabaddiBoard
