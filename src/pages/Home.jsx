function Home() {
  return (
    <div className="w-full h-screen p-5 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-black font-bold flex flex-col justify-center items-center">
        Bem Vindo
      </h1>{" "}
      <p className="justify-text text-black mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tellus
        vel felis tempus mollis sed id nulla. Ut pulvinar porta justo. Morbi
        vitae finibus risus. Duis iaculis diam nibh, eu efficitur nisl cursus a.{" "}
        <br />
        Etiam et ornare lorem. Ut felis ligula, sagittis ac congue quis,
        pharetra eu sem. Etiam gravida dolor sapien, ac feugiat purus dignissim
        sed. Pellentesque ultricies, quam quis egestas sollicitudin, mauris
        mauris placerat massa, eget finibus sapien tortor et turpis. <br />{" "}
        Donec purus augue, consequat nec pellentesque sodales, convallis et
        odio. Proin vitae enim vestibulum, feugiat enim semper, bibendum ipsum.
        Donec ut felis fringilla felis facilisis condimentum. <br />
      </p>{" "}
      <button className="bg-cyan-950 text-white px-4 py-2 rounded mt-5 hover:bg-cyan-800">
        Clique Aqui
      </button>
    </div>
  );
}

export default Home;
