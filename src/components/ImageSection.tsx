const ImageSection: React.FC = () => {
  return (
    <section className='w-full max-w-[22.813rem] lg:max-w-[25rem] lg:ml-[0.313rem] xl:max-w-[42.5rem]'>
      <h2 className='text-[2.188rem] leading-[2.563rem] ml-[0.313rem] lg:ml-[1rem] lg:mt-[0.625rem] lg:text-[3.75rem] lg:leading-[4.438rem] lg:max-w-[37.5rem]'>
        Episodes of the <span className='font-bold'>4th</span> season of the
        series{" "}
        <span className='text-blue font-bold text-[2.5rem] leading-[3.125rem] lg:text-[4.375rem] lg:leading-[5.438rem]'>
          Rick and Morty
        </span>
      </h2>
      <div className='mt-[2.5rem] w-full max-w-[21.938rem] lg:max-w-[41.25rem] lg:mt-[2.625rem]'>
        <img alt='Rick and Morty series logo' src='/images/image.png' />
      </div>
    </section>
  );
};

export default ImageSection;
