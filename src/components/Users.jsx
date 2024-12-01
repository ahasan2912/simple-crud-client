import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loaderdata = useLoaderData();
    const [users, setUsers] = useState(loaderdata);
    const handleDelete = (_id)=> {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert("Succeful Deleted");
                const ramaining = users.filter(user => user._id !== _id);
                setUsers(ramaining);
            }
        })
    }
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} : {user._id} <button onClick={()=>handleDelete(user._id)}>Delete</button>
                    <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                    </Link>
                     </p>)}
            </div>
        </div>
    );
};

export default Users;