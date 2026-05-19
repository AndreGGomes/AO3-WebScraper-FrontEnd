import logoAO3 from '../../assets/AO3Logo.png';

export function HeaderBar(){
    return(
        <div className=' flex bg-[#EEEEEE] h-[70px] w-[800px] rounded-t'>
            <div className='w-[200px] grid place-items-center'>
                <img src={logoAO3} className='h-[50px] w-auto'/>
            </div>
            <div className='w-[600px] grid place-items-center'>
                <h1 className="font-georgia text-[40px] text-[#970000]">AO3 Scraper</h1>
            </div>
        </div>
    );
}