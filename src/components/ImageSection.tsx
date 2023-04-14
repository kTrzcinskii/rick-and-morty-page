const ImageSection: React.FC = () => {
  return (
    <section className='w-[22.813rem]'>
      <h2 className='text-[2.188rem] leading-[2.563rem] ml-[0.313rem]'>
        Episodes of the <span className='font-bold'>4th</span> season of the
        series{" "}
        <span className='text-blue font-bold text-[2.5rem] leading-[3.125rem]'>
          Rick and Morty
        </span>
      </h2>
      <div className='mt-[2.5rem] w-[21.938rem]'>
        <img alt='Rick and Morty series logo' src='/images/image.png' />
      </div>
    </section>
  );
};

export default ImageSection;
