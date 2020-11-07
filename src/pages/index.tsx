import React from "react"
import { Layout } from "../components/layout";
import '../components/layout.css';
import logo from '../images/brandon_profile.jpg';

const IndexPage: React.FC = () => {

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4 divide-x divide-gray-900 bg-gray-400 h-screen">
        <div className="col-span-1 m-2 place-self-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12 px-4">
              <img src={logo} 
              alt="..." 
              className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center py-2">
            <h1>Software Developer</h1>
          </div>
        </div>
        <div className="col-span-1 m-2 place-self-center px-3">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut leo justo. Phasellus pretium enim quis sollicitudin
          euismod. In sed leo vitae ex posuere eleifend vitae semper mauris. Nullam ultrices varius lorem, nec fermentum mi iaculis 
          quis. Vestibulum a lectus odio. Aliquam luctus ligula tellus, eu elementum leo malesuada vitae. Vestibulum ut turpis ac ligula 
          condimentuxm aliquet a et ipsum. Phasellus in porttitor augue.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
