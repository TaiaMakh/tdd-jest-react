import React from "react";

export default function Homes() {
  const homesDataPromise = Promise.resolve([
    {
      title: "Test home 1",
      image: "listing.jpg",
      location: "Test location 1",
      price: "1",
    },
    {
      title: "Test home 2",
      image: "listing.jpg",
      location: "Test location 2",
      price: "2",
    },
    {
      title: "Test home 3",
      image: "listing.jpg",
      location: "Test location 3",
      price: "3",
    },
  ]);

  let homes;

  homesDataPromise.then((homeData) => {
    homes = homeData.map((home) => {
      return <div data-testid="home">{home}</div>;
    });
  });
  return (
    <div>
      <div data-testid="home">Home</div>
    </div>
  );
}
