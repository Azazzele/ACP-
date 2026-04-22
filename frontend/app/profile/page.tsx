export default async function ProfilePage() {
	const user = await getCurrentUser(); //& JWT
  
	return (
	  <div>
		<h1>Привет, {user.name}</h1>
		<p>Email: {user.email}</p>
	  </div>
	);
  }