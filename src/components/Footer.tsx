const Footer: React.FC = () => {
  return (
    <footer className='uppercase flex justify-center items-center bg-gray-dark  h-[3.063rem]  lg:h-[4.375rem] absolute bottom-0 left-0 right-0'>
      <p className='text-white-dark font-bold text-[0.875rem] lg:text-[1rem] mr-[1.313rem] lg:mr-0'>
        lorem ipsum &copy;{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
