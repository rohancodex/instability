function ProfileBadge() {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <img
        className="rounded-full h-32 w-32 object-cover"
        src="https://images.unsplash.com/photo-1581599129568-e33151627628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="user profile"
      ></img>
      <p className="text-center mt-3 w-20">Some Guy</p>
    </div>
  );
}
export default ProfileBadge;
