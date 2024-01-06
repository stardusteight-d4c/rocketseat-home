import ReactDOM from "react-dom"

interface Props {
  setShowPlayer: React.Dispatch<React.SetStateAction<boolean>>
  baseUrl: string
}

export const PlayerModal = ({ setShowPlayer, baseUrl }: Props) => {
  return ReactDOM.createPortal(
    <div className="w-screen h-screen z-[1000] fixed inset-0 text-white bg-black/60">
      <div className="fixed top-[55%] w-[365px] sm:w-[700px] lg:w-[850px] -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="youtubePlayer w-full relative">
          <div
            onClick={() => setShowPlayer(false)}
            className="cursor-pointer absolute -right-4 -top-14 flex items-center gap-x-1"
          >
            <span className="text-lg font-bold">Fechar</span>
            <img src="/svg/icons/close-menu.svg" className="w-14" />
          </div>
          <iframe
            src={`${baseUrl}?color=white&theme=dark&fs=0&modestbranding=0&autoplay=1`}
            className="outline-none border border-[#FFFFFF2E] w-full h-[490px]"
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
