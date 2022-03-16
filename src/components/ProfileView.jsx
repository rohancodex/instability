import ProfileBadge from "./ProfileBadge";

function ProfileView() {
  return (
    <div className="container mx-auto grid grid-cols-2 my-14 justify-center lg:justify-center  md:grid-cols-3 lg:grid-cols-5 ">
      <ProfileBadge />
      <ProfileBadge />
      <ProfileBadge />
      <ProfileBadge />
      <ProfileBadge />
    </div>
  );
}

export default ProfileView;
