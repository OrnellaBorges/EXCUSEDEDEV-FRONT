import { Users } from "../../api/UserApi";

type Props = {
    letter: string;
};

export default function UserList({ letter }: Props) {
    return (
        <ul>
            {Users.filter((user) =>
                user.first_name.toLowerCase().includes(letter)
            ).map((user) => (
                <li key={user.id}>{user.first_name}</li>
            ))}
        </ul>
    );
}
