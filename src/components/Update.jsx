import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadeduser = useLoaderData();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        fetch(`http://localhost:5000/users/${loadeduser._id}`, {
            method: "PUT",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert('user updated successfully')
                }
            })
    }
    return (
        <div>
            <h1>Update Information of Loaded User of {loadeduser?.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={loadeduser?.name} />
                <br />
                <input type="email" name='email' defaultValue={loadeduser?.email} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;