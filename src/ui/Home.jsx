import CreateUser from "../features/users/CreateUser";

function Home() {
  return (
    <div className="sm:-16 my-10 px-4 text-center">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
