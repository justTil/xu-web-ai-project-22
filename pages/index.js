import { withPublic } from "../src/hook/route";

function Home() {
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
}

export default withPublic(Home);
