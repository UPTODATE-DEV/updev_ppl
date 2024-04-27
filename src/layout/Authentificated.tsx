import App from "../App";

export default function Authentificated() {
  const userAuthenficated = true;

  return (
    <div>
      <header>Header</header>
      {userAuthenficated && <App />}
    </div>
  );
}
