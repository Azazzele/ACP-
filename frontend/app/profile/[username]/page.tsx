import User from "../../../components/user/user";

export default async function UserPage({ params } : { params: { username: string } }) {

    const {username} = await params

    return (
        <div>
            <User></User>
        </div>
    );
}