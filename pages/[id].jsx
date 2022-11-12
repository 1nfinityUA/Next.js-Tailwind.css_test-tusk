import Router from "next/router";
import Head from "next/head";

//  не працюве запить по ІД перевіряв вставляючи після слеша саме значення ід або 1 нічого не працює
//  розмітка зроблена але не підставленні пропси
//  не має адаптиву

export default function JobID({ post }) {
    console.log(post);
    return (
        <div className="flex items-center flex-col">
            <Head>
                <title>Job detalied Desktop</title>
            </Head>
            <div className="flex flex-col-reverse sm:flex-row-reverse">
                <div className="rounded-lg text-[#E8EBF3] h-[436px] sm:h-[436px] w-[372px] sm:w-[402px]">
                    <div className="bg-[#202336] pt-[31px] pl-[62px]">
                        <h1 className="font-semibold">Departament mane.</h1>
                        <h1 className="mb-2 font-semibold">
                            Umiversity Hospital Giessen.
                        </h1>
                        <p>▽ AKH Wien, 1090 Wien, Währinger</p>
                        <p className="mb-2">Gürtel 18-20</p>
                        <p>phone +7098272983</p>
                        <p className="pb-4">email@mail</p>
                    </div>
                    <div className="bg-[#2A3047]">
                        <img src="" alt="тут должна быть карта" />
                    </div>
                </div>
                <div>
                    <div className="sm:w-[774px] w-[374px] shadow-md h-[1761px] text-[#3A4562] border-b	border-solid border-inherit		">
                        <header className="mb-[39px] w-[723px] h-[44px] flex items-center justify-center">
                            <h1 className="font-extrabold text-[26px] ml-1 w-[250px]">
                                Job Details
                            </h1>
                            <div className="w-full"></div>
                            <p className="mr-3 w-[220px]">⍓ Save to my list</p>
                            <p className="w-[120px]">↬ Share</p>
                        </header>
                        <div className="h-full">
                            <button className="mb-[32px] font-bold rounded-lg w-[127px] h-[46px] text-[10px] text-[#ffff] bg-cyan-800">
                                APPLY NOW
                            </button>
                            <div className="mb-[7px] flex">
                                <div className="font-bold text-2xl	 w-[515px]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Vitae voluptatem similique
                                    voluptates. Ipsum nihil est fugit cum dolore
                                    voluptatem blanditiis.
                                </div>
                                <div className="flex flex-col w-[165px]">
                                    <div className="font-bold pl-14">
                                        € 55 400-60 000
                                    </div>
                                    <div className="pl-14">
                                        Brutto, per year
                                    </div>
                                </div>
                            </div>
                            <p className="mb-[7px] font-['Roboto'] text-gray-300">
                                posted 2 days ago
                            </p>
                            <div className="mb-12 w-[721px] flex flex-col font-['Roboto']">
                                <div className="mb-7 overflow-hidden">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Totam eius repellendus
                                    pariatur deserunt ullam nemo labore aut
                                    dolorum, aliquam ea. Quae iusto similique
                                    esse perspiciatis, cum officia ab laborum
                                    consequuntur impedit temporibus dignissimos
                                    maxime fuga dicta corrupti aut est quasi
                                    earum. Maiores cupiditate at, adipisci
                                    laborum eius eaque sint! Distinctio dolores
                                    sed ipsam et modi dolorem tempore quas
                                    suscipit, veritatis veniam ratione
                                    recusandae explicabo soluta est eaque
                                    voluptas laboriosam quaerat?
                                </div>
                                <div className="mb-3 text-xl font-bold">
                                    Responsopilities
                                </div>
                                <div className="mb-4 overflow-hidden">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Tempore, est tenetur.
                                    Corrupti similique dolores repellat? Quam
                                    neque veritatis quos debitis provident
                                    eveniet quisquam nam est vitae corporis at
                                    et nobis maiores id quas obcaecati officia,
                                    officiis illo? Perspiciatis, rerum eos.
                                </div>
                                <div className="mb-4 overflow-hidden">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum a ab quis odio
                                    doloremque vitae, laboriosam voluptatum
                                    delectus asperiores velit facere,
                                    dignissimos harum sequi quisquam autem
                                    distinctio doloribus illo nemo? Consectetur
                                    sint quos harum qui, delectus, reprehenderit
                                    nisi quas, repellat hic amet beatae! Alias
                                    ullam minima doloribus voluptas vel
                                    consequatur eius. Neque placeat nobis atque
                                    quaerat. Fugit eos non exercitationem
                                    excepturi odio, corrupti velit laudantium
                                    at. At optio commodi nulla.
                                </div>
                                <div className="mb-7 overflow-hidden">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Et fugit perferendis odio
                                    id similique consectetur eaque doloribus
                                    obcaecati, eius optio a? Sequi quia quo
                                    provident quod perspiciatis quaerat possimus
                                    earum similique sint ullam, nulla eligendi
                                    labore dolore nam repellat maiores. Quae
                                    porro cumque nesciunt, nostrum vitae odit,
                                    explicabo repellat deserunt perspiciatis
                                    commodi dicta, tempora unde voluptatibus
                                    fugiat animi? Iste, beatae.
                                </div>
                                <div className="mb-3 text-xl font-bold">
                                    Compensation & Benefits:
                                </div>
                                <div className="w-[420px]">
                                    <ul>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                        <li>
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet
                                            consectetur.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Non,
                                            nam.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="mb-[86px] font-bold rounded-lg w-[127px] h-[46px] text-[10px] text-[#ffff] bg-cyan-800">
                                APPLY NOW
                            </button>
                            <div>
                                <h1 className="mb-1 font-extrabold text-[26px] ml-1 w-[250px]">
                                    Additional info
                                </h1>
                                <hr className="mb-3" />
                                <p className="mb-[10px]">Employment type</p>
                                <div className="flex">
                                    <button className="font-bold mr-[8px] rounded-lg w-[222px] h-[49px] bg-indigo-200">
                                        Full time
                                    </button>
                                    <button className="font-bold mr-[8px] rounded-lg w-[222px] h-[49px] bg-indigo-200">
                                        Part time
                                    </button>
                                    <button className="mb-[23px] font-bold mr-[8px] rounded-lg w-[222px] h-[49px] bg-indigo-200">
                                        Temporary
                                    </button>
                                </div>
                                <p className="mb-[10px]">Benefits</p>
                                <div className="flex">
                                    <button className="font-bold text-[#988B49] mr-[8px] rounded-lg w-[222px] h-[49px] bg-amber-100">
                                        Fexible shedule
                                    </button>
                                    <button className="mb-[87px] font-bold text-[#988B49] mr-[8px] rounded-lg w-[222px] h-[49px] bg-amber-100">
                                        Relocation assistance
                                    </button>
                                </div>
                                <div>
                                    <h1 className="mb-1 font-extrabold text-[26px] ml-1 w-[250px]">
                                        Attached images
                                    </h1>
                                    <hr className="mb-[21px]" />
                                    <div className="flex">
                                        <img
                                            className="mr-[10px] w-[200px] h-[116px]"
                                            src=""
                                            alt="photo-1"
                                        />
                                        <img
                                            className="mr-[10px] w-[200px] h-[116px]"
                                            src=""
                                            alt="photo-2"
                                        />
                                        <img
                                            className="mr-[10px] w-[200px] h-[116px]"
                                            src=""
                                            alt="photo-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="relative w-[771px]">
                        <button
                            className="my-[80px] absolute left-[-100px] rounded-lg font-semibold leading-4 text-[12px] w-[213px] h-[50px] bg-zinc-300"
                            onClick={() => Router.push("/")}
                        >
                            ⌫ RETURN TO JOB BOARD
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
}

//  не працює хз як витягнути з сервера по ІД окремий об"єкт
JobID.getServerSideProps = async (context) => {
    const response = await fetch(
        `https://api.json-generator.com/templates/ZM1r0eic3XEy/data/${context.query.id}?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
    );
    const post = await response.json();
    return {
        post,
    };
};
