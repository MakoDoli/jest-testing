import withWrapper from "./withWrapper";

export default function Header() {
  const Profile = withWrapper(() => <div>Profile</div>);
  return (
    <header>
      Header
      <Profile />
    </header>
  );
}
