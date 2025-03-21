const Users = ({ users }: { users: any }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user: any) => (
        <p key={user.email}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
