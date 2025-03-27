
import React, { useEffect, useRef, useState } from 'react';
import Title from '@/components/title';
import RoundBox from '@/components/roundBox';
import Slider from '@/components/slider';
import Layout from './layout';

function KeyerPage() {
    const timer = useRef(null)
    const [count, setCount] = useState('SOS')
    const handleProgressChange = (progress) => {
        if (progress == 'over') {
            setTimeout(() => {
                clearInterval(timer.current)
                setCount('SOS')
                timer.current = null
            }, 200)
        }
    };

    useEffect(() => {
        if (count == 0 && timer.current !== null) {
            setCount('OVER')
            clearInterval(timer.current)
            timer.current = null
        }
    }, [count])
    const custom_class = 'text-default mb-[19px] font-bold text-[24px]'
    const p_class = "text-default mb-[3px] text-[10px]"
    // 开始倒计时
    const handlerTimer = () => {
        setCount(3)
        timer.current = setInterval(() => {
            setCount(pre => pre -= 1)
        }, 1000)
    }
    return <Layout>
        {
            timer.current == null && <div className='text-[#AE0431] flex justify-center mt-[84px] '>
                <h3 className='block w-[278px] text-center leading-5 font-semibold text-[16px]'>Location sent to emergency contact; video recording enabled</h3>
            </div>
        }
        {
            timer.current != null && <div className='mx-[40px]'>
                <Title custom_class={custom_class} text="Panic Button" />
                <div className='flex flex-col '>
                    <p className={p_class}>In 3 seconds your phone will: </p>
                    <p className={p_class}>Sound on alarm noise</p>
                    <p className={p_class}>Record emergency vedio</p>
                    <p className={p_class}>Send your location to emergency contacts</p>
                </div>
            </div>
        }
        <div className='flex justify-center relative cursor-pointer flex-1'>
            <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <RoundBox text={count} fn={handlerTimer} />
            </div>
            {timer.current !== null && (
                <div className='absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center '>
                    <Slider initialValue={0} max={2} onChange={handleProgressChange} />
                </div>
            )}
        </div>
    </Layout>
}


export default KeyerPage