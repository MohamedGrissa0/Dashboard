import React, {useState} from "react";

const UsersTable = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isclicked, setisclicked] = useState(false)
    const [isDone , setisDone] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        



    };
    const users = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        }, {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        }, {
            id: 3,
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg"
      }, {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg"
      }, {
          id: 3,
          name: "Bob Johnson",
          email: "bob.johnson@example.com",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg"
      },
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    }, {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    }, {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },  
    ];
    return (
      <div className="users-table mt-16 relative overflow-hidden">
        <div className="table-header p-2 grid grid-cols-5 text-center gap-2 rounded-xl">
          <p className="header-item font-bold">Picture</p>
          <p className="header-item font-bold">Username</p>
          <p className="header-item font-bold">Email</p>
          <p className="header-item font-bold">Update</p>
          <p className="header-item font-bold">Delete</p>
        </div>
        <hr className="table-divider" />
        {users.map((item) => {
          return (
            <div key={item.id}>
              <div className="table-row grid grid-cols-5 p-2 text-center gap-2">
                <div className="flex items-center justify-center">
                  <img
                    src={item.avatar}
                    alt=""
                    className="profile-pic rounded-full w-12 h-12 md:w-16 md:h-16 block md:flex items-center justify-center"
                  />
                </div>
                <p
                  className="username self-center"
                  style={{ wordWrap: "break-word" }}
                >
                  {item.name}
                </p>
                <p
                  className="email self-center"
                  style={{ wordWrap: "break-word" }}
                >
                  {item.email}
                </p>
                <button
                  className="update-btn flex justify-center items-center"
                  onClick={() => setisclicked(!isclicked)}
                >
                  <span className="btn-text bg-blue-500 text-white px-4 py-2 rounded-full md:px-6 md:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    Edit
                  </span>
                </button>
                <button className="delete-btn flex justify-center items-center">
                  <span className="btn-text bg-blue-500 text-white -ml-1 px-4 py-2 rounded-full md:px-6 md:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    Delete
                  </span>
                </button>
              </div>
              <hr className="table-divider" />
            </div>
    )
  })}
  <div>
  <form onSubmit={handleSubmit} className={isclicked ? "p-3 fixed  top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-999 bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2" : "hidden"}>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
    <div className="relative flex flex-col justify-between">
      <label htmlFor="name" className="block font-bold mb-2">
        <i className="fas fa-user mr-2 "></i>
        <span className="">Name : </span>
      </label>
      <input type="text" id="name" name="name" placeholder="Enter your name" className="block w-full border-2 border-gray-400 rounded-lg bg-transparent text-gray-700 py-2 px-4 md:py-3 md:px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
    </div>
    <div className="relative flex flex-col justify-between">
      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
        <i className="fas fa-envelope mr-2 text-blue-500"></i>
        <span className="">Email :</span>
      </label>
      <input type="email" id="email" name="email" placeholder="Enter your email" className="block w-full border-2 border-gray-400 rounded-lg bg-transparent text-gray-700 py-2 px-4 md:py-3 md:px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
    </div>
  </div>
  
  <div className="flex justify-center mt-5">
    <button type="button" onClick={() => setisclicked(false)} className="bg-white text-blue-500 text-lg px-6 py-2 rounded-lg mr-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-blue-500 transition-all duration-200 ease-in-out">Cancel</button>
    <button type="button" className="bg-blue-500 text-white text-lg px-6 py-2 rounded-lg mr-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200 ease-in-out">Done</button>
  </div>
</form>



        </div>
        </div>
    );
};

export default UsersTable;
