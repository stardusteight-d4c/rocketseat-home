interface ExpertsChildrenProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ExpertsChildren: React.FC<ExpertsChildrenProps> = () => (
  <div className="flex lg:items-center flex-col-reverse lg:flex-row gap-4">
    <img src="/image/tutores.png" alt="tutores/png" className="w-[168px]" />
    <span className="text-neutral leading-[20px]">
      Nossos instrutores estão prontos para te ajudar a conquistar seu objetivo
      ✅
    </span>
  </div>
)
