import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SpecificationsTabs from "../components/Specification";
import PerformanceSection from "../components/Performance";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axios";

export default function Model() {
  const { id } = useParams();
  console.log(id);
  const [vehicles, setVehicles] = useState();

  useEffect(() => {
    if (id) fetchVehicle();
  }, [id]);

  const fetchVehicle = async () => {
    try {
      const response = await axiosInstance.get(`/vehicles/${id}`);
      setVehicles(response.data);
    } catch (error) {
      console.error("Error fetching vehicle:", error);
    }
  };
  console.log(vehicles);
  if (!vehicles) return <p>Loading...</p>;
  return (
    <>
      <Hero />
      <SpecificationsTabs />
      <PerformanceSection />
    </>
  );
}
