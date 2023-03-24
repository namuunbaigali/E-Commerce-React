import { useCurrentUser } from "../../hooks/useCurrentUser";

export default function Home() {
  const { currentUser } = useCurrentUser();
  return (
    <>
      <h1>Hi {currentUser.email}</h1>
    </>
  );
}
