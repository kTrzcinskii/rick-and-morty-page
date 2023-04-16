const Footer: React.FC = () => {
  return (
    <footer className='uppercase w-full flex justify-center items-center bg-gray-dark  h-[3.063rem] mt-[4.125rem] lg:h-[4.375rem] lg:mt-[9.375rem]'>
      <p className='text-white-dark font-bold text-[0.875rem] lg:text-[1rem] mr-[1.313rem] lg:mr-0'>
        lorem ipsum &copy;{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
