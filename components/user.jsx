// працює все крім геоданних
export default function User({ createdAt, description, pictures, address }) {
    return (
        <div className="bg-slate-100 shadow-md	 ml-5 w-[1400px]  flex rounded-xl relative mb-[8px]">
            <div className="flex w-[1070px] h-[116px]">
                <img
                    className="pt-1 pl-1 rounded-full w-[85px] h-[85px]"
                    src={pictures[0]}
                    alt="photo"
                />
                <div className="ml-7 mb-0.5">
                    <h6 className="text-[#3A4562] font-bold	 w-[712px] h-[50px] overflow-hidden mb-1">
                        {description}
                    </h6>
                    <p className="mb-1 text-[#878D9D]">{address}</p>
                    {/* геоданні не розібрався як витягнути */}
                    {/* попробувати через ссилку яка кидає на кординати */}
                    <p className="text-[#878D9D]">▼ Vienna, Austria</p>
                </div>
            </div>
            <div className="flex items-center">★★★★★</div>
            <div className="absolute right-0">
                <div className="flex flex-col w-[138px] h-[116px]">
                    <img
                        className="mb-8 absolute top-2 right-4 color=[grey/07]"
                        src="https://www.clipartmax.com/png/middle/473-4737742_icon-bookmark-svg-png-icon-free-download-bookmark-icon-png.png"
                        alt="bookmark"
                        width={12}
                        height={12}
                    />
                    <div className="absolute bottom-1 pr-1 text-[#878D9D]">
                        {createdAt}
                    </div>
                </div>
            </div>
        </div>
    );
}
