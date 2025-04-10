export const DescBlock = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className='container-sm flex flex-col gap-6 md:gap-8'>
      <h1 className='text-2xl font-semibold text-blue-dark md:text-4xl'>
        {title}
      </h1>
      {desc && (
        <p className={`max-w-[680px] md:text-xl ${className}`}>{desc}</p>
      )}
    </div>
  );
};
