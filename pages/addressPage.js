import IconSvg from '@/components/Icon'
import Layout from './layout'
import { useState } from 'react'
import Title from '@/components/title'
import Button from '@/components/Button'

export default function AddressPage() {
    const [isDetail, setIsDetail] = useState(false)
    const address_list = [
        {
            iconName: 'moneySvg',
            title: 'Bank Of America',
            sub_title: '280 E Colorado Blvd Open'
        }, {
            iconName: 'adressIcon',
            title: 'Pasadena High School',
            sub_title: 'East House Street.91107 Open'
        },
        {
            iconName: 'secureSvg',
            title: 'Huntington Hospital',
            sub_title: '625 S Fair Oaks Blvd Open'
        },
        {
            iconName: 'bookSvg',
            title: 'Book Store',
            sub_title: '370 S Marengo Blvd Open'
        },
    ]
    const handleToggleClick = () => {
        setIsDetail(!isDetail)
    }
    const classConfig = 'w-[101px] bg-pink rounded-full py-[5px] text-[#AE0431] text-[12px] mx-[15px] font-bold'
    return <Layout >
        <div className='absolute top-[85px] left-[50%] translate-x-[-50%] box-shadow-search_bottom w-[320px] h-[45px] rounded-lg bg-white flex justify-center items-center'>
            <span className='text-[#494948] text-[14px] font-bold'>Search place</span>
        </div>
        <ul className="absolute right-[30px] top-[390px]">
            <li>
                <IconSvg name="compassIcon" />
            </li>
            <li>
                <IconSvg name="navigationIcon" />
            </li>
        </ul>
        <div className={`map-wrap  w-full bg-no-repeat bg-cover h-[82%] bg-white  ` + `${isDetail ? 'bg-[url(../assets/images/adressBg1.png)]' : 'bg-[url(../assets/images/adressBg2.png)]'}`}>
        </div>
        <div className='bg-white absolute bottom-0 w-full'>
            {
                isDetail ? <div className='px-[50px] py-[22px]'>
                    <Title size="16px" text="Pasadena High School" />
                    <Title size="10px" text="East House Street.91107 Open" />
                    <div className='flex items-center justify-center mt-[25px] mb-[21px]'>
                        <Button classConfig={classConfig}>
                            <IconSvg name="vehicle" />
                            <span className='pl-[8px]'>4 min</span>
                        </Button>
                        <Button classConfig={classConfig}>
                            <IconSvg name="personIcon" />
                            <span className='pl-[8px]'>15 min</span>
                        </Button>
                    </div>
                    <Button classConfig={'w-full bg-bright-read text-[#fff] py-[10px]'}>
                        Direction
                    </Button>
                </div> : <ul className='flex flex-col'>
                    {
                        address_list.map(item => (
                            <AdressItem row={item} toggleView={handleToggleClick} />
                        ))
                    }

                </ul>
            }

        </div>
    </Layout>
}


function AdressItem({ row, toggleView }) {
    const handlePushAdressDetail = () => {
        toggleView()
    }
    return (<li className='flex py-[17px] px-[37px] hover:bg-pink border-b-[1px] border-[#a6a7a6]' onClick={handlePushAdressDetail}>
        <div className='bg-[pink] rounded-full'>
            <IconSvg name={row.iconName} bgColor="pink" rounded style={{ width: '34px', height: '34px' }} />
        </div>
        <div className='text-default ml-[6px] flex-col justify-between'>
            <div className=' text-[14px] font-bold'>
                {row.title}
            </div>
            <div className='text-[10px]'>
                {row.sub_title}
            </div>
        </div>
    </li>)
}