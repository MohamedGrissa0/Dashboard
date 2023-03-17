import React , {useState} from "react";

const UsersTable = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isclicked , setisclicked] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();

   
  };
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];
  return (
    <div className="flex ml-2 flex-col mt-[70px] relative ">
      <div className=" overflow-x-auto ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg shadow-lg ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.avatar}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-sm text-white py-3 px-6  rounded-lg bg-blue-500" onClick={()=>{setisclicked(!isclicked)}}>Edit </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-sm text-white p-3 px-6  rounded-lg bg-blue-500">Delete </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={`absolute top-[80%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-gray-500 shadow-xl grid grid-cols-1 p-10 ${isclicked ? "" : "hidden"}`}>
  <form onSubmit className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
    <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-300" placeholder="Name" />

    <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-300" placeholder="Email" />

    <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="message">Message:</label>
    <textarea id="message" name="message" className="w-full h-32 bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:ring-2 focus:ring-gray-300" placeholder="Message"></textarea>

    <div className="flex justify-end">
      <button type="submit" className="text-sm text-white p-3 px-6 mr-2 rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Submit</button>
      <button type="button" className="text-sm text-gray-700 p-3 px-6 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50" onClick={() => setisclicked(false)}>Close</button>
    </div>
  </form>
</div>


            
          </div>
        </div>
      </div>

    </div>
  );
};

export default UsersTable;
