import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExploreHeading from "../../shared/ExploreHeading";
import FoodCard from "../../shared/FoodCard";

export default function Recipes() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getFoods = async () => {
      const res = await fetch("./fack.json");
      const data = await res.json();

      setFoods(data.foods);
    };
    getFoods();
  }, []);

  // fetch("./fack.json")
  // .then(res => res.json())
  // .then(data => console.log(data.foods))
  return (
    <div className="my-10">
      <div className="flex items-center justify-between">
        <ExploreHeading />
        <button
          onClick={() => navigate("/foods")}
          className="flex items-center text-primary hover:text-secondary duration-200"
        >
          See all
          <ChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
        {foods.slice(0, 4).map((item, index) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
