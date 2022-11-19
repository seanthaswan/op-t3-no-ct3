import Head from "next/head";
import Image from "next/image";
import menacing from "../public/img/menacing.png";

export default function Home() {
  const handleOpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", e);
  };
  return (
    <div className="m-auto flex h-screen max-w-screen-sm flex-col justify-center gap-6">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="justify-right absolute top-0 right-0 flex flex-col p-4">
        <div className="title text-center text-4xl">OP-T3</div>
        {/* <img className="w-6" src={menacing.src} alt="" /> */}
      </div>
      <div className="text-center text-2xl">Which Stand is more OP?</div>
      <div className="flex items-center justify-around p-8">
        <div className="flex flex-col items-center">
          <div className="stand-name mb-8 text-xl">Star Platinum</div>
          <div className="stand-picture-container mb-4 w-52 h-64 relative">
            <Image
              className="rounded drop-shadow-2xl"
              src="https://static.jojowiki.com/images/thumb/c/ca/latest/20200927002609/Star_Platinum_SC_Infobox_Anime.png/200px-Star_Platinum_SC_Infobox_Anime.png"
              alt="Star"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button
            className="rounded-full border bg-slate-50  py-1 px-8 text-black hover:bg-slate-200"
            onClick={handleOpClick}
          >
            OP
          </button>
        </div>
        <div className="italic">or</div>
        <div className="flex flex-col items-center">
          <div className="stand-name mb-8 text-xl">The World</div>
          <div className="stand-picture-container mb-4 w-52 h-64 relative">
            <Image
              className="rounded drop-shadow-2xl"
              src="https://static.jojowiki.com/images/thumb/7/7e/latest/20191015213103/The_World_Infobox_Anime.png/200px-The_World_Infobox_Anime.png"
              alt="World"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button className="rounded-full border bg-slate-50  py-1 px-8 text-black hover:bg-slate-200">
            OP
          </button>
        </div>
      </div>
    </div>
  );
}
