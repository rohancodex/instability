import ProfileBadge from "./ProfileBadge";

function ProfileView() {
  return (
    <div className="container mx-auto grid grid-cols-2 justify-center gap-2 md:grid-cols-3 lg:grid-cols-4 ">
      <ProfileBadge />
      <ProfileBadge />
      <ProfileBadge />
      <ProfileBadge />
      <ProfileBadge />
    </div>
  );
}
export default ProfileView;
