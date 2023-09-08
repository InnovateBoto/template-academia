function Bootstrap(Component: React.FC, bg: string) {
  return function HOC() {
    return (
      <div className={`px-4 sm:px-8 bg-[${bg}]`}>
        <Component />
      </div>
    );
  };
}

export default Bootstrap;
