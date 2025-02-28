import Image from 'next/image';

function ProfilePicture() {
  return (
    <div>
      <Image
        src="/images/profile.jpg" // Path relative to the public folder
        alt="Profile Picture"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}

export default ProfilePicture;