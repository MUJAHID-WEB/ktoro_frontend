export default function Custom404() {
    return <div className="flex flex-col justify-center items-center">
        <h3 className="font-[750] text-[300px] text-[#333]">404</h3>
        <h5 className="font-bold text-[60px] text-[#333]">الصفحه غير موجوده</h5>

        <p className="font-normal text-base text-[#606060] mt-4">الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>

        <button className="">
            <div className="flex flex-row text-white items-center bg-[#2B8DC5] p-5 rounded-2xl mt-6">
                <p className="font-bold text-lg pr-2">الرجوع للصفحه</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                    <path d="M7.83057 1.60156L12.9998 6.40156L7.83057 11.2016M12.2819 6.40156H1.7998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </button>
    </div>
}