import React, { useState } from 'react';
import { Layout } from "../components/layout"


const Contact: React.FC = () => {

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

    return (
        <div>
            <Layout>
              <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-400">
                <div className="w-full max-w-lg">
                  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <h1 className="block w-full text-center text-grey-darkest mb-6">Send me a message</h1>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"> Name </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Email </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={ email }
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message"> Message </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Message"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Layout>
        </div>
    )
};

export default Contact;
