import { FaBatteryFull, FaLeaf, FaRegCheckCircle, FaDollarSign } from "react-icons/fa"
import { AiFillSetting } from "react-icons/ai"
import { MdDesignServices } from "react-icons/md"
import { BiMap, BiSupport } from "react-icons/bi"
import { GiMedal } from "react-icons/gi"

function ChooseUs() {
  const iconStyle = {
    color: "#00bcd4",
    fontSize: "50px",
    marginRight: "20px",
    flexShrink: 0,
  }

  const boxStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "30px",
  }

  const textStyle = {
    flex: 1,
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 15px",
  }

  const items = [
    {
      Icon: FaBatteryFull,
      title: "Cutting-Edge Technology",
      text: "Our EV scooters are designed with the latest advancements in electric mobility, ensuring superior performance, extended battery life, and enhanced safety features.",
    },
    {
      Icon: FaLeaf,
      title: "Eco-Friendly Mobility",
      text: "We are committed to sustainability. Our scooters produce zero emissions, helping you reduce your carbon footprint while enjoying an efficient and smooth ride.",
    },
    {
      Icon: FaRegCheckCircle,
      title: "Unmatched Quality",
      text: "Built with premium materials and rigorous quality checks, our scooters are designed to be durable, reliable, and stylish— perfect for urban commuters and adventurers alike.",
    },
    {
      Icon: FaDollarSign,
      title: "Affordable and Cost-Effective",
      text: "Say goodbye to high fuel costs and frequent maintenance. Our EV scooters offer a budget-friendly alternative with significantly lower running and maintenance expenses.",
    },
    {
      Icon: MdDesignServices,
      title: "Innovative Design",
      text: "Our scooters combine sleek aesthetics with functional ergonomics, offering a modern and comfortable riding experience that turns heads wherever you go.",
    },
    {
      Icon: BiMap,
      title: "Smart Features",
      text: "Equipped with cutting-edge features like GPS tracking, app connectivity, and anti-theft systems, our scooters integrate technology to make your rides smarter and safer.",
    },
    {
      Icon: BiSupport,
      title: "Customer-Centric Service",
      text: "From purchase to after-sales support, we prioritize your satisfaction. Our dedicated team is here to ensure a seamless experience every step of the way.",
    },
    {
      Icon: GiMedal,
      title: "Comprehensive Warranty & Support",
      text: "Enjoy peace of mind with our comprehensive warranty and responsive customer service. We're here to keep you on the road, worry-free.",
    },
    {
      Icon: AiFillSetting,
      title: "Join the EV Revolution",
      text: "By choosing us, you're not just buying a scooter—you're joining a movement toward a cleaner, greener future. Together, we can revolutionize urban mobility.",
    },
  ]

  return (
    <section className="choose-section" style={{ padding: "50px 0" }}>
      <h2 style={{ color: "#000000", textAlign: "center", marginBottom: "40px" }}>
        Why Choose Us for Your EV Scooter Needs?
      </h2>
      <div style={gridStyle}>
        {items.map(({ Icon, title, text }, index) => (
          <div key={index} style={boxStyle}>
            <Icon style={iconStyle} />
            <div style={textStyle}>
              <h4 style={{ color: "#00bcd4", marginBottom: "10px", fontSize: "18px" }}>{title}</h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6" }}>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ChooseUs

