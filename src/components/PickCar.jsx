import { useState, useEffect } from "react"
import CarBox from "./CarBox"
import axiosInstance from "../api/axios"

function PickCar() {
  const [products, setProducts] = useState([])
  const [active, setActive] = useState(null)
  const [colorBtn, setColorBtn] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/product/getproducts?order=asc")
        setProducts(response.data.products)
        if (response.data.products.length > 0) {
          // Set the first product as active
          setActive(response.data.products[0]._id)
          setColorBtn(`btn${response.data[0]._id}`)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  const handleButtonClick = (productId) => {
    setActive(productId)
    setColorBtn(`btn${productId}`)
  }

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : ""
  }

  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-container__title">
            <h3>Vehicle Models</h3>
            <h2>Our Scooters</h2>
            <p>Choose from a variety of our amazing EV-Scooters to buy for your Stylish and Adventures Journey.</p>
          </div>
          <div className="pick-container__car-content">
            <div className="pick-box">
              {products.map((product) => (
                <button
                  key={product._id}
                  className={`${coloringButton(`btn${product._id}`)}`}
                  onClick={() => handleButtonClick(product._id)}
                >
                  &nbsp;&nbsp;&nbsp; {product.name} &nbsp;&nbsp;&nbsp;
                </button>
              ))}
            </div>

            {active && <CarBox car={products.find((product) => product._id === active)} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PickCar

